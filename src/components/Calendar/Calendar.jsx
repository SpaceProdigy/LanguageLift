import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
import { Badge, Tooltip, Typography, useTheme } from "@mui/material";
import { PickersDay } from "@mui/x-date-pickers";
import SchoolIcon from "@mui/icons-material/School";
import PropTypes from "prop-types";
import "dayjs/locale/uk";
import { ukUA, enUS } from "@mui/x-date-pickers/locales";
import { RootContext } from "../../main";
import { useContext } from "react";

export default function Calendar({ actualSchedule }) {
  const { language } = useContext(RootContext);
  const theme = useTheme();
  console.log(actualSchedule);

  const shouldDisplayBadge = ({ day }) => {
    const dayOfMonth = day.$d.toLocaleDateString();
    return actualSchedule?.filter(({ date }) => dayOfMonth === date);
  };

  return (
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
        key={language}
        sx={{
          width: "100%",
          maxWidth: 320,
        }}
        slots={{
          day: (props) => {
            const shouldDisplay = shouldDisplayBadge(props);
            console.log(shouldDisplay);
            return (
              <Tooltip
                title={
                  shouldDisplay[0]?.location && (
                    <div>
                      <Typography variant="subtitle2" textAlign="center">
                        {shouldDisplay[0]?.location}
                      </Typography>

                      <Typography variant="subtitle2" textAlign="center">
                        {shouldDisplay[0]?.time}
                      </Typography>
                    </div>
                  )
                }
                placement="top-end"
              >
                <Badge
                  overlap="circular"
                  badgeContent={
                    shouldDisplay.length > 0 && (
                      <SchoolIcon
                        fontSize="small"
                        sx={{ color: theme.palette.success.main }}
                      />
                    )
                  }
                >
                  <PickersDay
                    {...props}
                    sx={{
                      border: props.today
                        ? `solid 2px ${theme.palette.info.main} !important`
                        : shouldDisplay.length > 0 &&
                          `solid 2px ${theme.palette.success.main}`,
                    }}
                  />
                </Badge>
              </Tooltip>
            );
          },
        }}
      />
    </LocalizationProvider>
  );
}

Calendar.propTypes = {
  today: PropTypes.bool,
  actualSchedule: PropTypes.array,
};
