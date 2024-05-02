import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/uk";
import { ukUA, enUS } from "@mui/x-date-pickers/locales";
import { RootContext } from "../../main";
import { useContext, useEffect, useState } from "react";

import { Box, FormHelperText } from "@mui/material";
import dayjs from "dayjs";
import PropTypes from "prop-types";
BasicDatePicker.propTypes = {
  setErrorDate: PropTypes.func,
  errorDate: PropTypes.bool,
  setValueDate: PropTypes.func,
};

export default function BasicDatePicker({
  errorDate,
  setErrorDate,
  setValueDate,
}) {
  const [isDate, setIsDate] = useState(
    dayjs(new Date()).$d.toLocaleDateString() ?? ""
  );
  const [isPast, setIsPast] = useState(null);
  const { language } = useContext(RootContext);
  const datePattern = /^\d{2}\.\d{2}\.20\d{2}$/;
  const yearsIsCorrect = datePattern.test(isDate);

  useEffect(() => {
    setValueDate(isDate);
  }, [isDate, setValueDate]);

  useEffect(() => {
    if (
      isDate === "" ||
      isDate === "Invalid Date" ||
      !yearsIsCorrect ||
      isPast
    ) {
      setErrorDate(true);
    } else {
      setErrorDate(false);
    }
  }, [isDate, isPast, setErrorDate, yearsIsCorrect]);

  const errorFnc = () => {
    if (errorDate) {
      if (!yearsIsCorrect && isDate !== "") {
        return language === "en" ? "Year is incorrect" : "Рік неправильний";
      }
      if (isDate === "") {
        return language === "en"
          ? "Date is required"
          : "Необхідно вказати дату";
      }
      if (isPast) {
        return language === "en"
          ? "You cannot enter a past date"
          : "Не можна вводити минулу дату";
      }
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={
          language === "ua"
            ? ukUA.components.MuiLocalizationProvider.defaultProps.localeText
            : enUS.components.MuiLocalizationProvider.defaultProps.localeText
        }
        adapterLocale={language === "ua" ? "uk" : "en"}
      >
        <DatePicker
          sx={{ width: "100%" }}
          label={language === "en" ? "Select a date" : "Виберіть дату"}
          disablePast={true}
          defaultValue={dayjs(new Date())}
          format="DD/MM/YYYY"
          onChange={(e) => setIsDate(e.$d.toLocaleDateString())}
          onError={(e) => setIsPast(e)}
        />
        <FormHelperText sx={{ height: 30 }} error>
          {errorFnc()}
        </FormHelperText>
      </LocalizationProvider>
    </Box>
  );
}
