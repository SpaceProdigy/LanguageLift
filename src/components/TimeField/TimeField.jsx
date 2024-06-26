import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect } from "react";
import { Box, FormHelperText } from "@mui/material";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro/SingleInputTimeRangeField";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import { selectLessonsJillArr } from "../../redux/englishLessonsSlice";
TimeField.propTypes = {
  setValueTime: PropTypes.func,
  isEdit: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  isDay: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
  errorTime: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  setErrorTime: PropTypes.func,
  isChooseALesson: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
  valueTime: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.any,
  ]),
  valueSelect: PropTypes.string,
  lessonExist: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  setLessonExist: PropTypes.func,
};

export default function TimeField({
  setValueTime,
  setErrorTime,
  isDay,
  errorTime,
  isEdit,
  isChooseALesson,
  valueTime,
  valueSelect,
  lessonExist,
  setLessonExist,
}) {
  const language = useSelector(selectLanguage);
  const LessonsJillArr = useSelector(selectLessonsJillArr);

  const addInitialTime = () => {
    if (isEdit?.edit) {
      const timeArr = isEdit?.data?.[isChooseALesson ?? 0]?.time;
      return [dayjs(timeArr[0]), dayjs(timeArr[1])];
    }
    if (isDay) {
      return [
        dayjs(`${dayjs(isDay).format("YYYY-MM-DD")}T17:00`),
        dayjs(`${dayjs(isDay).format("YYYY-MM-DD")}T18:30`),
      ];
    } else {
      return [
        dayjs(`${dayjs(new Date()).format("YYYY-MM-DD")}T17:00`),
        dayjs(`${dayjs(new Date()).format("YYYY-MM-DD")}T18:30`),
      ];
    }
  };

  useEffect(() => {
    setValueTime(addInitialTime());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const messageError = (error) => {
    if (!error) {
      return "";
    }

    if (error[0]) {
      if (error[0] === "invalidRange") {
        return language === "en" ? "Invalid range " : "Недійсний діапазон ";
      }
    }
    if (error[1]) {
      if (error[1] === "invalidRange") {
        return language === "en" ? "Invalid range " : "Недійсний діапазон ";
      }
    }

    return error;
  };

  useEffect(() => {
    const checkTimeAvailability = async () => {
      const timeErrorMessage =
        language === "en"
          ? "At this time, the lesson already exists"
          : "На цей час урок вже існує";
      if (valueTime) {
        const isError = LessonsJillArr.some(({ time, location }) => {
          if (
            valueSelect === location &&
            dayjs(valueTime[0]).isAfter(dayjs(time[0])) &&
            dayjs(valueTime[0]).isBefore(dayjs(time[1]))
          ) {
            return true;
          }
          if (
            valueSelect === location &&
            dayjs(valueTime[1]).isAfter(dayjs(time[0])) &&
            dayjs(valueTime[1]).isBefore(dayjs(time[1]))
          ) {
            return true;
          }
          if (
            (valueSelect === location &&
              dayjs(valueTime[0]).isSame(dayjs(time[0]))) ||
            (valueSelect === location &&
              dayjs(valueTime[0]).isSame(dayjs(time[1])))
          ) {
            return true;
          }
          if (
            (valueSelect === location &&
              dayjs(valueTime[1]).isSame(dayjs(time[0]))) ||
            (valueSelect === location &&
              dayjs(valueTime[1]).isSame(dayjs(time[1])))
          ) {
            return true;
          }
        });

        setLessonExist(isError ? timeErrorMessage : false);
      }
    };

    checkTimeAvailability();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueSelect, valueTime]);

  return (
    <Box sx={{ width: "100%" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <SingleInputTimeRangeField
          fullWidth
          label={language === "en" ? "Enter the time" : "Введіть час"}
          defaultValue={addInitialTime()}
          onChange={(e) => {
            setValueTime([
              dayjs(`${dayjs(e[0]).format("YYYY-MM-DDTHH:mm")}`),
              dayjs(`${dayjs(e[1]).format("YYYY-MM-DDTHH:mm")}`),
            ]);
          }}
          onError={(e) => {
            setErrorTime(e);
          }}
          format="HH:mm"
        />

        <FormHelperText
          sx={{
            height: 30,
            ml: 0,
            overflow: "auto",
            whiteSpace: "nowrap",
            scrollbarWidth: "thin",
          }}
          error
        >
          {messageError(errorTime)}
          {lessonExist}
        </FormHelperText>
      </LocalizationProvider>
    </Box>
  );
}
