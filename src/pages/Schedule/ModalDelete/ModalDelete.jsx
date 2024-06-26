import CloseIcon from "@mui/icons-material/Close";

import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../redux/localOperation";
import { deleteScheduleByIdThunk } from "../../../redux/englishLessonsOperations";
import { collectionDb } from "../../../locales/collectionDb";
import { Wrapper, WrapperClose } from "./ModalDelete.stylled";
import PropTypes from "prop-types";

ModalDelete.propTypes = {
  isDeleteModal: PropTypes.bool,
  setIsDeleteModal: PropTypes.func,
  setIsChooseALesson: PropTypes.func,
  isEdit: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  isChooseALesson: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
  dispatch: PropTypes.func,
};

export default function ModalDelete({
  isDeleteModal,
  setIsDeleteModal,
  isEdit,
  isChooseALesson,
  setIsChooseALesson,
  dispatch,
}) {
  const language = useSelector(selectLanguage);
  return (
    <Modal
      open={isDeleteModal}
      onClose={() => {
        setIsDeleteModal(false);
      }}
    >
      <Wrapper>
        <WrapperClose>
          <IconButton
            onClick={() => {
              setIsDeleteModal(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </WrapperClose>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="20px"
        >
          {isEdit && (
            <Typography
              variant="subtitle2"
              textAlign="center"
              color="#FF8C00"
            >{`${isEdit?.data[isChooseALesson ?? 0]?.date}
                   ${dayjs(
                     isEdit?.data[isChooseALesson ?? 0]?.time?.[0]
                   ).format("HH:mm")} - ${dayjs(
              isEdit?.data[isChooseALesson ?? 0]?.time?.[1]
            ).format("HH:mm")} ${
              isEdit?.data[isChooseALesson ?? 0]?.location
            }`}</Typography>
          )}

          <Typography variant="subtitle2" textAlign="center">
            {language === "en"
              ? "Warning: If you delete this lesson, it cannot be recovered."
              : "Попередження.Якщо видалити цей урок, то його не можна буде відновити."}
          </Typography>
          <Box display="flex" gap="20px">
            <Button onClick={() => setIsDeleteModal(false)}>
              {language === "en" ? "Close" : "Закрити"}
            </Button>
            <Button
              onClick={() => {
                dispatch(
                  deleteScheduleByIdThunk({
                    nameCollection: collectionDb.lessonsWithJill,
                    id: isEdit?.data[isChooseALesson ?? 0]?.id,
                  })
                );
                setIsChooseALesson(null);
                setIsDeleteModal(false);
              }}
            >
              {language === "en" ? "Delete" : "Видалити"}
            </Button>
          </Box>
        </Box>
      </Wrapper>
    </Modal>
  );
}
