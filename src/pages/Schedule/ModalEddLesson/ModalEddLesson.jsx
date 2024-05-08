import { Button, IconButton, Modal } from "@mui/material";
import SelectPlace from "../../../components/SelectPlace/SelectPlace";
import BasicDatePicker from "../../../components/DatePicker/DatePicker";
import TimeField from "../../../components/TimeField/TimeField";
import { selectLanguage } from "../../../redux/localOperation";
import { useSelector } from "react-redux";
import { Wrapper, WrapperClose } from "./ModalEddLesson.styled";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

ModalEddLesson.propTypes = {
  isDeleteModal: PropTypes.bool,
  setIsDeleteModal: PropTypes.func,
  setIsChooseALesson: PropTypes.func,
  isEdit: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  isChooseALesson: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
  setOpen: PropTypes.func,
  dispatch: PropTypes.func,
  onSubmit: PropTypes.func,
  valueSelect: PropTypes.string,
  open: PropTypes.bool,
  setValueSelect: PropTypes.func,
  register: PropTypes.func,
  errors: PropTypes.object,
  selectError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  setSelectError: PropTypes.func,
  setValueTime: PropTypes.func,
  isDay: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
  errorTime: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  setErrorTime: PropTypes.func,

  valueTime: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.any,
  ]),
  lessonExist: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  setLessonExist: PropTypes.func,
  setErrorDate: PropTypes.func,
  errorDate: PropTypes.bool,
  setValueDate: PropTypes.func,
};

export default function ModalEddLesson({
  open,
  setOpen,
  onSubmit,
  isEdit,
  isChooseALesson,
  valueSelect,
  setValueSelect,
  selectError,
  setSelectError,
  setValueTime,
  errorTime,
  setErrorTime,
  isDay,
  valueTime,
  lessonExist,
  setLessonExist,
  errorDate,
  setErrorDate,
  setValueDate,
}) {
  const language = useSelector(selectLanguage);
  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <Wrapper>
        <WrapperClose>
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
          >
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
          onSubmit={(e) => onSubmit(e)}
        >
          <SelectPlace
            isEdit={isEdit}
            isChooseALesson={isChooseALesson}
            valueSelect={valueSelect}
            setValueSelect={setValueSelect}
            selectError={selectError}
            setSelectError={setSelectError}
          />

          {!isEdit?.edit && (
            <BasicDatePicker
              errorDate={errorDate}
              setErrorDate={setErrorDate}
              setValueDate={setValueDate}
              isDay={isDay}
            />
          )}

          <TimeField
            isEdit={isEdit}
            setValueTime={setValueTime}
            errorTime={errorTime}
            setErrorTime={setErrorTime}
            isChooseALesson={isChooseALesson}
            isDay={isDay}
            valueTime={valueTime}
            valueSelect={valueSelect}
            lessonExist={lessonExist}
            setLessonExist={setLessonExist}
          />
          <Button type="submit" variant="contained" fullWidth size="large">
            {language === "en" ? "Submit" : "Надіслати"}
          </Button>
        </form>
      </Wrapper>
    </Modal>
  );
}
