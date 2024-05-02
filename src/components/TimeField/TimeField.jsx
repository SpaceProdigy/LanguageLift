import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { RootContext } from "../../main";
import { useContext, useEffect, useState } from "react";
import { Box, FormHelperText } from "@mui/material";
// import { MultiInputTimeRangeField } from "@mui/x-date-pickers-pro/MultiInputTimeRangeField";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro/SingleInputTimeRangeField";
import PropTypes from "prop-types";
TimeFormat.propTypes = {
  valueTime: PropTypes.string,
  setValueTime: PropTypes.func,

  setErrorTime: PropTypes.func,
};
const defTime = dayjs(new Date());

export default function TimeFormat({
  setValueTime,

  setErrorTime,
}) {
  const [timeError, setTimeError] = useState([]);
  const { language } = useContext(RootContext);

  useEffect(() => {
    setValueTime(`17:00 - 18:30`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (timeError[1] || timeError[0]) {
      setErrorTime(true);
    } else {
      setErrorTime(false);
    }
  }, [setErrorTime, timeError]);

  return (
    <Box sx={{ width: "100%" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <SingleInputTimeRangeField
          fullWidth
          label={language === "en" ? "Enter the time" : "Введіть час"}
          defaultValue={[
            dayjs(`${defTime.$y}-${defTime.$M + 1}-${defTime.$D}T17:00`),

            dayjs(`${defTime.$y}-${defTime.$M + 1}-${defTime.$D}T18:30`),
          ]}
          onChange={(e) => {
            setValueTime(
              `${e[0].$H.toString().padStart(2, "0")}:${e[0].$m
                .toString()
                .padStart(2, "0")} - ${e[1].$H
                .toString()
                .padStart(2, "0")}:${e[1].$m.toString().padStart(2, "0")}`
            );
          }}
          onError={(e) => setTimeError(e)}
          format="HH:mm"
        />

        <FormHelperText sx={{ height: 30, ml: 0 }} error>
          {timeError[0]} {timeError[1]}
        </FormHelperText>
      </LocalizationProvider>
    </Box>
  );
}
