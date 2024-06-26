import { Box, Tooltip, Typography, useTheme } from "@mui/material";
import { PickersDay } from "@mui/x-date-pickers";
import SchoolIcon from "@mui/icons-material/School";
import PropTypes from "prop-types";
import { nanoid } from "@reduxjs/toolkit";

export const DayItem = ({
  permissions,
  setIsModal,
  setIsEdit,
  shouldDisplay,
  props,
}) => {
  const theme = useTheme();
  const sortArr = shouldDisplay.sort((a, b) => {
    const dateA = new Date(a.time[0]);
    const dateB = new Date(b.time[0]);

    return dateB - dateA;
  });

  const hendleOpenMenu = () => {
    console.log(shouldDisplay);
    if (!permissions && !shouldDisplay) {
      return;
    }
    if (!permissions && shouldDisplay.length === 0) {
      return;
    }

    setIsModal(true);

    setIsEdit({ edit: false, data: shouldDisplay });
  };

  return (
    <Box>
      <Box position="relative">
        {shouldDisplay.length === 1 && (
          <Box sx={{ position: "absolute", top: -5, right: -5, zIndex: 5 }}>
            <SchoolIcon
              fontSize="small"
              sx={{ color: theme.palette.success.main }}
            />
          </Box>
        )}

        <Box>
          {shouldDisplay.length > 1 && (
            <Box
              sx={(theme) => ({
                position: "absolute",
                top: -2,
                right: -2,
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: theme.palette.secondary.main,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 5,
              })}
            >
              <Typography variant="caption" color="#111">
                {shouldDisplay.length}
              </Typography>
            </Box>
          )}
        </Box>
        <Tooltip
          component="div"
          classes={{
            tooltip: "custom-tooltip",
          }}
          title={
            sortArr.length > 0 && (
              <div
                style={{
                  maxHeight: 100,
                  overflow: "auto",
                  scrollbarWidth: "thin",
                  padding: 5,
                }}
              >
                {sortArr.map(({ location, time }) => (
                  <div key={nanoid()} style={{ padding: 5 }}>
                    <Typography
                      variant="subtitle2"
                      textAlign="center"
                      component="div"
                    >
                      {location}
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      textAlign="center"
                      component="div"
                    >
                      {`${time[0].slice(11)} - ${time[1].slice(11)}`}
                    </Typography>
                  </div>
                ))}
              </div>
            )
          }
          placement="top-end"
        >
          <PickersDay
            onClick={hendleOpenMenu}
            {...props}
            sx={{
              border: props.today
                ? `solid 2px ${theme.palette.info.main} !important`
                : shouldDisplay.length > 0 &&
                  `solid 2px ${theme.palette.success.main}`,
            }}
          />
        </Tooltip>
      </Box>
    </Box>
  );
};

DayItem.propTypes = {
  props: PropTypes.object,
  today: PropTypes.bool,
  setIsModal: PropTypes.func,
  setIsEdit: PropTypes.func,
  shouldDisplay: PropTypes.array,
  permissions: PropTypes.bool.isRequired,
  isEdit: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
