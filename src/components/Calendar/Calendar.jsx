import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar, DayCalendarSkeleton } from "@mui/x-date-pickers";
import { Box, Paper } from "@mui/material";
import PropTypes from "prop-types";
import "dayjs/locale/uk";
import { ukUA, enUS } from "@mui/x-date-pickers/locales";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ModalCalendar } from "./ModalCallendar/ModalCallendar";
import { DayItem } from "./DayItem/DayItem";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import {
  selectLessonsJillArr,
  selectLessonsJillLoading,
} from "../../redux/englishLessonsSlice";
import dayjs from "dayjs";

export default function Calendar({
  handleAddALesson,
  setIsDay,
  isEdit,
  setIsEdit,
  open,
  setIsChooseALesson,
  isChooseALesson,
  isDay,
  setValueSelect,
  permission,
  isDeleteModal,
  setIsDeleteModal,
}) {
  const [isModal, setIsModal] = useState(false);
  const language = useSelector(selectLanguage);
  const isLoading = useSelector(selectLessonsJillLoading);
  const LessonsJillArr = useSelector(selectLessonsJillArr);

  const handleClose = () => {
    setIsDay(null);
    setIsModal(false);
  };

  const shouldDisplayBadge = ({ day }) => {
    const dayOfMonth = dayjs(day.$d).format("DD.MM.YYYY");
    return LessonsJillArr?.filter(({ date }) => dayOfMonth === date);
  };

  return (
    <Box>
      <Paper
        elevation={1}
        sx={{
          p: 2,
          position: "relative",
          boxShadow: "0px 0px 4px -2px rgba(0,0,0,0.52)",
        }}
      >
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={
            language === "ua"
              ? ukUA.components.MuiLocalizationProvider.defaultProps.localeText
              : enUS.components.MuiLocalizationProvider.defaultProps.localeText
          }
          adapterLocale={language === "ua" ? "uk" : "en"}
        >
          <DateCalendar
            onChange={(e) => setIsDay(e)}
            key={language}
            sx={{
              width: "100%",
              maxWidth: 320,
            }}
            loading={isLoading}
            renderLoading={() => <DayCalendarSkeleton />}
            slots={{
              day: (props) => {
                const shouldDisplay = shouldDisplayBadge(props);
                // console.log(props);
                // console.log(shouldDisplay);
                return (
                  <DayItem
                    setIsModal={setIsModal}
                    setIsEdit={setIsEdit}
                    shouldDisplay={shouldDisplay}
                    props={props}
                  />
                );
              },
            }}
          />
        </LocalizationProvider>
        <AnimatePresence>
          {isModal && (
            <ModalCalendar
              open={open}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              handleClose={handleClose}
              language={language}
              handleAddALesson={handleAddALesson}
              setIsChooseALesson={setIsChooseALesson}
              isChooseALesson={isChooseALesson}
              isDay={isDay}
              setValueSelect={setValueSelect}
              permission={permission}
              isDeleteModal={isDeleteModal}
              setIsDeleteModal={setIsDeleteModal}
            />
          )}
        </AnimatePresence>
      </Paper>
    </Box>
  );
}

Calendar.propTypes = {
  today: PropTypes.bool,
  handleAddALesson: PropTypes.func,
  setIsDay: PropTypes.func,
  isDay: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
  isEdit: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  setIsEdit: PropTypes.func,
  open: PropTypes.bool,
  setIsChooseALesson: PropTypes.func,
  isChooseALesson: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
  setValueSelect: PropTypes.func,
  permission: PropTypes.bool,
  isDeleteModal: PropTypes.bool,
  setIsDeleteModal: PropTypes.func,
};
