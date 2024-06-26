import {
  Box,
  ClickAwayListener,
  FormControl,
  IconButton,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { WrapperClose } from "./ModalCallendar.styled";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { selectLessonsLoading } from "../../../redux/englishLessonsSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { lessonsPlaces } from "../../../locales/localesJill";

export const ModalCalendar = ({
  isEdit,
  handleClose,
  language,
  handleAddALesson,
  setIsChooseALesson,
  setIsEdit,
  isDay,
  isChooseALesson,
  setValueSelect,
  permissions,
  setIsDeleteModal,
  pathNavigate,
}) => {
  const [isFocuse, setIsFocus] = useState(false);
  const isLoading = useSelector(selectLessonsLoading);

  const navigate = useNavigate();
  useEffect(() => {
    if (isEdit?.data) {
      setValueSelect(
        isEdit?.data[0]?.location ?? lessonsPlaces.defaultPlace.fullName
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 100,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Paper elevation={2}>
        <ClickAwayListener
          onClickAway={() => {
            if (isFocuse) {
              return;
            }
            handleClose();
          }}
        >
          <Box>
            <WrapperClose>
              <Typography variant="subtitle2">
                {dayjs(isDay).format("YYYY-MM-DD")}
              </Typography>

              <IconButton onClick={handleClose} size="small">
                <CloseIcon fontSize="small" />
              </IconButton>
            </WrapperClose>

            {isEdit?.data?.length > 1 && (
              <FormControl sx={{ width: "100%", maxWidth: 400 }}>
                <InputLabel>
                  {language === "en" ? "Choose a lesson" : "Виберіть урок"}
                </InputLabel>
                <Select
                  disabled={isLoading}
                  onChange={(e) => {
                    setIsChooseALesson(e.target.value);
                    setValueSelect(isEdit?.data[e.target.value]?.location);
                  }}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  label={
                    language === "en" ? "Choose a lesson" : "Виберіть урок"
                  }
                  defaultValue={0}
                >
                  {isEdit?.data?.map(({ location, time }, index) => (
                    <MenuItem key={index} value={index}>
                      <Typography variant="subtitle2">
                        <Typography component="span">
                          {location === lessonsPlaces.zwanenhof.fullName &&
                            lessonsPlaces.zwanenhof.shortName}
                          {location === lessonsPlaces.mariaMediatrix.fullName &&
                            lessonsPlaces.mariaMediatrix.shortName}
                        </Typography>
                        <Typography component="span">
                          {" "}
                          {dayjs(time[0]).format("HH:mm")} -{" "}
                          {dayjs(time[1]).format("HH:mm")}
                        </Typography>
                      </Typography>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}

            <MenuList>
              {permissions && (
                <MenuItem
                  disabled={isLoading}
                  onClick={() => {
                    handleAddALesson();
                  }}
                >
                  <ListItemText>
                    {language === "en" ? "Add a lesson" : "Додати урок"}
                  </ListItemText>
                  <ListItemIcon sx={{ ml: 2 }}>
                    <AddCircleIcon color="success" />
                  </ListItemIcon>
                </MenuItem>
              )}
              {isEdit.data?.length > 0 && permissions && (
                <Box>
                  <MenuItem
                    disabled={isLoading}
                    onClick={() => {
                      setIsEdit((prevState) => {
                        return { ...prevState, edit: true };
                      });

                      handleAddALesson();
                    }}
                  >
                    <ListItemText>
                      {language === "en" ? "Edit lesson" : "Редагувати урок"}
                    </ListItemText>
                    <ListItemIcon sx={{ ml: 2 }}>
                      <EditIcon color="secondary" />
                    </ListItemIcon>
                  </MenuItem>
                  <MenuItem
                    disabled={isLoading}
                    onClick={() => {
                      setIsDeleteModal(true);
                    }}
                  >
                    <ListItemText>
                      {language === "en" ? "Delete a lesson" : "Видалити урок"}
                    </ListItemText>
                    <ListItemIcon sx={{ ml: 2 }}>
                      <DeleteIcon color="error" />
                    </ListItemIcon>
                  </MenuItem>
                </Box>
              )}
              {isEdit?.data?.length > 0 && (
                <MenuItem
                  disabled={isLoading}
                  onClick={() => {
                    navigate(
                      `${pathNavigate}/${
                        isEdit?.data[isChooseALesson ?? 0]?.id
                      }`,
                      { state: isEdit?.data[isChooseALesson ?? 0]?.id }
                    );
                    handleClose();
                  }}
                >
                  <ListItemText>
                    {language === "en" ? "To the lesson" : "До уроку "}
                  </ListItemText>
                  <ListItemIcon sx={{ ml: 2 }}>
                    <DirectionsWalkIcon color="info" />
                  </ListItemIcon>
                </MenuItem>
              )}
            </MenuList>
          </Box>
        </ClickAwayListener>
      </Paper>
    </motion.div>
  );
};

ModalCalendar.propTypes = {
  handleAddALesson: PropTypes.func,
  isEdit: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  setIsEdit: PropTypes.func,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  language: PropTypes.string,
  setIsChooseALesson: PropTypes.func,
  isChooseALesson: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
  isDay: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
  setValueSelect: PropTypes.func,
  permissions: PropTypes.bool,
  isDeleteModal: PropTypes.bool,
  setIsDeleteModal: PropTypes.func,
  pathNavigate: PropTypes.string.isRequired,
};
