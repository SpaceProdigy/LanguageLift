import { Box, Paper, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import BasicTable from "../../components/Table/Table";

import { Password } from "../../components/Password/Password";
import { AlertComponent } from "../../components/AlertComponent/AlertComponent";
import SelectMonth from "../../components/SelectMonth/SelectMonth";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import {
  addScheduleThunk,
  getScheduleThunk,
  updateScheduleByIdThunk,
} from "../../redux/englishLessonsOperations";
import { selectLessonsJillLoading } from "../../redux/englishLessonsSlice";
import dayjs from "dayjs";
import { collectionDb } from "../../locales/collectionDb";
import ImageTitle from "../../components/ImageTitle/ImageTitle";
import image from "../../pictures/pageSchedule/job.jpg";
import ModalDelete from "./ModalDelete/ModalDelete";
import ModalEddLesson from "./ModalEddLesson/ModalEddLesson";

const Schedule = () => {
  const language = useSelector(selectLanguage);
  const isLoading = useSelector(selectLessonsJillLoading);
  const screenMinWidth1100 = useMediaQuery("(min-width:1100px)");
  const screenMinWidth600 = useMediaQuery("(min-width:600px)");

  const dispatch = useDispatch();

  const [isDay, setIsDay] = useState(null);
  const [valueTime, setValueTime] = useState("");
  const [valueSelect, setValueSelect] = useState("Zwanenhof");
  const [errorTime, setErrorTime] = useState(false);
  const [selectMonth, setSelectMonth] = useState(
    `${new Date().getMonth() + 1}.${new Date().getFullYear()}`
  );
  const [permission, setPermission] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [openModalPassword, setOpenModalPassword] = useState(false);
  const [valueDate, setValueDate] = useState("");
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isChooseALesson, setIsChooseALesson] = useState(null);
  const [lessonExist, setLessonExist] = useState(false);
  const [selectError, setSelectError] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  // console.log(selectError);
  // console.log("TIME", valueTime);
  // console.log("isDay", isDay);
  // console.log(addingError);
  // console.log(IsLoading);
  // console.log(LessonsJillArr);
  // console.log("EDIT", isEdit);
  // console.log("CHOSE", isChooseALesson);
  // console.log("SELECT", valueSelect);

  useEffect(() => {
    dispatch(getScheduleThunk(collectionDb.lessonsWithJillSchedule));
  }, [dispatch]);

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
  }, [permission]);

  const handleAddALesson = () => {
    if (permission) {
      return setOpen(true);
    }
    if (sessionStorage.getItem("addLesson")) {
      setPermission(true);
    } else {
      setOpenModalPassword(true);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (valueTime[0]?.$isDayjsObject || valueTime[1]?.$isDayjsObject) {
      setErrorTime(false);
    } else {
      setErrorTime(["invalidRange"]);
    }
    if (errorDate || errorTime || lessonExist || selectError) {
      return;
    }

    if (isEdit.edit) {
      console.log(isEdit?.data[isChooseALesson ?? 0]?.id);
      dispatch(
        updateScheduleByIdThunk({
          nameCollection: collectionDb.lessonsWithJillSchedule,
          id: isEdit?.data[isChooseALesson ?? 0]?.id,
          updateValue: {
            id: isEdit?.data[isChooseALesson ?? 0]?.id,
            location: valueSelect,
            time: [
              dayjs(valueTime[0]).format("DD.MM.YYYYTHH:mm"),
              dayjs(valueTime[1]).format("DD.MM.YYYYTHH:mm"),
            ],
            lastUpdated: dayjs(new Date()).format("DD.MM.YYYYTHH:mm:ss"),
          },
        })
      );
      if (!isLoading) {
        setOpen(false);
        setValueSelect("");
        setIsChooseALesson(null);
      }
      return;
    }

    dispatch(
      addScheduleThunk({
        nameCollection: collectionDb.lessonsWithJillSchedule,
        data: {
          location: valueSelect,
          date: valueDate,
          time: [
            dayjs(valueTime[0]).format("YYYY-MM-DDTHH:mm"),
            dayjs(valueTime[1]).format("YYYY-MM-DDTHH:mm"),
          ],
          timestamp: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss"),
        },
      })
    );

    if (!isLoading) {
      setOpen(false);
      setIsChooseALesson(null);
    }
  };

  return (
    <>
      <AlertComponent />
      <Box
        sx={{
          mb: 5,
        }}
      >
        <ImageTitle
          image={image}
          // tipingText={lesson && lesson?.date && lesson.date}
          title={language === "en" ? "Schedule of lessons" : "Розклад уроків"}
        />
        <Box
          display="flex"
          width="100%"
          gap="40px"
          mt="40px"
          flexWrap={screenMinWidth1100 ? "nowrap" : "wrap"}
          justifyContent="center"
        >
          <Calendar
            handleAddALesson={handleAddALesson}
            setIsDay={setIsDay}
            setIsEdit={setIsEdit}
            isEdit={isEdit}
            open={open}
            setIsChooseALesson={setIsChooseALesson}
            isChooseALesson={isChooseALesson}
            isDay={isDay}
            setValueSelect={setValueSelect}
            permission={permission}
            isDeleteModal={isDeleteModal}
            setIsDeleteModal={setIsDeleteModal}
          />

          <Paper
            elevation={screenMinWidth600 ? 1 : 0}
            sx={{
              padding: screenMinWidth600 ? 5 : 0,
              width: "100%",
              boxShadow: "0px 0px 3px -2px rgba(0,0,0,0.82)",
            }}
          >
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap="30px"
            >
              <Paper
                elevation={2}
                sx={{
                  width: "100%",
                  maxWidth: 400,
                  boxShadow: "0px 0px 3px -2px rgba(0,0,0,0.82)",
                }}
              >
                <SelectMonth
                  selectMonth={selectMonth}
                  setSelectMonth={setSelectMonth}
                />
              </Paper>

              <BasicTable
                selectMonth={selectMonth}
                permission={permission}
                isDeleteModal={isDeleteModal}
                setIsDeleteModal={setIsDeleteModal}
                setIsEdit={setIsEdit}
                handleAddALesson={handleAddALesson}
                setIsChooseALesson={setIsChooseALesson}
                setValueSelect={setValueSelect}
              />
            </Box>
          </Paper>
        </Box>

        <Password
          passwordKey={"2024"}
          sessionKey={"addLesson"}
          closeClickInside={true}
          openModal={openModalPassword}
          setOpenModal={setOpenModalPassword}
          buttonClose={true}
        />

        <ModalEddLesson
          open={open}
          setOpen={setOpen}
          onSubmit={onSubmit}
          isEdit={isEdit}
          isChooseALesson={isChooseALesson}
          valueSelect={valueSelect}
          setValueSelect={setValueSelect}
          selectError={selectError}
          setSelectError={setSelectError}
          setValueTime={setValueTime}
          errorTime={errorTime}
          setErrorTime={setErrorTime}
          isDay={isDay}
          valueTime={valueTime}
          lessonExist={lessonExist}
          setLessonExist={setLessonExist}
          errorDate={errorDate}
          setErrorDate={setErrorDate}
          setValueDate={setValueDate}
        />

        <ModalDelete
          dispatch={dispatch}
          isChooseALesson={isChooseALesson}
          isDeleteModal={isDeleteModal}
          isEdit={isEdit}
          setIsChooseALesson={setIsChooseALesson}
          setIsDeleteModal={setIsDeleteModal}
        />
      </Box>
    </>
  );
};

export default Schedule;
