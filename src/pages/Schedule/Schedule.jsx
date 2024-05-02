import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { RootContext } from "../../main";
import Calendar from "../../components/Calendar/Calendar";
import BasicTable from "../../components/Table/Table";
import BasicDatePicker from "../../components/DatePicker/DatePicker";
import TimeFormat from "../../components/TimeField/TimeField";
import SelectPlace from "../../components/SelectPlace/SelectPlace";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { lessonsShema } from "../../shemas/lessonsShema";
import CloseIcon from "@mui/icons-material/Close";

import {
  getDataToFirestore,
  writeDataToFirestore,
} from "../../../firestoreFunctions/dbFunctions";
import { Wrapper, WrapperClose } from "./Schedule.styled";
import { Password } from "../../components/Password/Password";
import { AlertComponent } from "../../components/AlertComponent/AlertComponent";
import { notify } from "../../components/AlertComponent/notify";

const Schedule = () => {
  const [permission, setPermission] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [errorTime, setErrorTime] = useState(false);
  const [openModalPassword, setOpenModalPassword] = useState(false);
  const [actualSchedule, setActualSchedul] = useState([]);
  const [valueDate, setValueDate] = useState("");
  const [valueTime, setValueTime] = useState("");
  const [open, setOpen] = useState(false);
  const { language } = useContext(RootContext);

  useEffect(() => {
    getDataToFirestore("lessonsWithJill", setActualSchedul);
  }, []);

  useEffect(() => {
    const actualPermission = () => {
      if (permission) {
        return;
      }
      if (sessionStorage.getItem("addLesson")) {
        setPermission(true);
      } else {
        setPermission(false);
      }
    };

    actualPermission();
  }, [errorTime, permission]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(lessonsShema(language)),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    if (errorDate || errorTime) {
      return;
    }
    setActualSchedul((prevState) => [
      ...prevState,
      { ...data, date: valueDate, time: valueTime },
    ]);

    const isOk = await writeDataToFirestore("lessonsWithJill", {
      ...data,
      date: valueDate,
      time: valueTime,
    });

    if (isOk) {
      notify(
        "success",
        language === "en" ? "Lesson added successfully" : "Урок додано успішно"
      );
      setOpen(false);
    }
  };

  return (
    <>
      <AlertComponent />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 5,
          mb: 5,
          gap: 2,
        }}
      >
        <Typography variant="h5">
          {language === "en" ? "Schedule of lessons" : "Розклад уроків"}
        </Typography>
        <Calendar actualSchedule={actualSchedule} />
        <BasicTable
          actualSchedule={actualSchedule}
          setActualSchedul={setActualSchedul}
          permission={permission}
        />
        {actualSchedule.length === 0 && (
          <Typography variant="h6" textAlign="center">
            {language === "en"
              ? "Lessons this month are not yet scheduled"
              : "Уроки в цьому місяці ще незаплановано "}
          </Typography>
        )}
        <Button
          onClick={() => {
            if (permission) {
              return setOpen(true);
            }
            if (sessionStorage.getItem("addLesson")) {
              setPermission(true);
            } else {
              setOpenModalPassword(true);
            }
          }}
          variant="contained"
        >
          {language === "en" ? "Add a lesson" : "Додати урок"}
        </Button>
        <Password
          passwordKey={"5555"}
          sessionKey={"addLesson"}
          closeClickInside={true}
          openModal={openModalPassword}
          setOpenModal={setOpenModalPassword}
          buttonClose={true}
        />

        <Modal open={open} onClose={() => setOpen(false)}>
          <Wrapper>
            <WrapperClose>
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </WrapperClose>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: 400,
              }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <SelectPlace errors={errors} register={register} />
              <BasicDatePicker
                errorDate={errorDate}
                setErrorDate={setErrorDate}
                setValueDate={setValueDate}
              />
              <TimeFormat
                valueTime={valueTime}
                setValueTime={setValueTime}
                errorTime={errorTime}
                setErrorTime={setErrorTime}
              />
              <Button type="submit" variant="contained" fullWidth size="large">
                {language === "en" ? "Submit" : "Надіслати"}
              </Button>
            </form>
          </Wrapper>
        </Modal>
      </Box>
    </>
  );
};

export default Schedule;
