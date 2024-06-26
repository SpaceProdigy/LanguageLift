import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import DeleteIcon from "@mui/icons-material/Delete";

import PropTypes from "prop-types";
import {
  Box,
  CircularProgress,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import {
  selectLessonsJillArr,
  selectLessonsLoading,
} from "../../redux/englishLessonsSlice";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { lessonsPlaces } from "../../locales/localesJill";

BasicTable.propTypes = {
  isDeleteModal: PropTypes.bool,
  setIsDeleteModal: PropTypes.func,
  permissions: PropTypes.bool.isRequired,
  selectMonthCalendar: PropTypes.object.isRequired,
  setIsEdit: PropTypes.func,
  handleAddALesson: PropTypes.func,
  setIsChooseALesson: PropTypes.func,
  setValueSelect: PropTypes.func,
  isEdit: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  isChooseALesson: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
  pathNavigate: PropTypes.string.isRequired,
};

export default function BasicTable({
  setIsDeleteModal,
  setIsEdit,
  permissions,
  handleAddALesson,
  setIsChooseALesson,
  setValueSelect,
  pathNavigate,
}) {
  const language = useSelector(selectLanguage);
  const LessonsJillArr = useSelector(selectLessonsJillArr);
  const isLoading = useSelector(selectLessonsLoading);
  const screenWidthBigger600 = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  const sortArr = [...LessonsJillArr]?.sort((a, b) => {
    const dateA = new Date(a.time[0]);
    const dateB = new Date(b.time[0]);

    return dateA - dateB;
  });

  return (
    <TableContainer
      elevation={2}
      sx={{ boxShadow: "0px 0px 5px -2px rgba(0,0,0,0.52)" }}
      component={Paper}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              {language === "en" ? "Location" : "Місцезнаходження"}
            </TableCell>
            <TableCell align="center">
              {language === "en" ? "Date" : "Дата"}
            </TableCell>
            <TableCell align="center">
              {language === "en" ? "Time" : "Час"}
            </TableCell>
            <TableCell align="center" sx={{ whiteSpace: "nowrap" }}>
              {language === "en" ? "To the lesson" : "До уроку"}
            </TableCell>
            {permissions && (
              <>
                <TableCell align="center">
                  {language === "en" ? "Edit" : "Редагувати"}
                </TableCell>
                <TableCell align="center">
                  {language === "en" ? "Delete" : "Видалити"}
                </TableCell>
              </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortArr &&
            sortArr.length > 0 &&
            sortArr.map(({ id, date, time, location }, index, item) => (
              <TableRow
                key={index}
                id={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  {screenWidthBigger600 && location}
                  {!screenWidthBigger600 &&
                    location === lessonsPlaces.zwanenhof.fullName &&
                    lessonsPlaces.zwanenhof.shortName}
                  {!screenWidthBigger600 &&
                    location === lessonsPlaces.mariaMediatrix.fullName &&
                    lessonsPlaces.mariaMediatrix.shortName}
                </TableCell>

                <TableCell align="center">{date}</TableCell>
                <TableCell align="center" sx={{ whiteSpace: "nowrap" }}>
                  {`${dayjs(time[0]).format("HH-mm")} - ${dayjs(time[1]).format(
                    "HH-mm"
                  )}`}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    color="info"
                    onClick={() => {
                      setIsChooseALesson(index);
                      setIsEdit({ edit: false, data: item });
                      navigate(`${pathNavigate}/${id}`, {
                        state: item[index],
                      });
                    }}
                  >
                    <DirectionsWalkIcon />
                  </IconButton>
                </TableCell>
                {permissions && (
                  <>
                    <TableCell align="center">
                      <IconButton
                        color="secondary"
                        onClick={() => {
                          setValueSelect(location);
                          setIsChooseALesson(index);
                          setIsEdit({ edit: true, data: item });
                          handleAddALesson();
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        color="error"
                        onClick={() => {
                          setIsDeleteModal(true);
                          setIsChooseALesson(index);
                          setIsEdit({ edit: true, data: item });
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {isLoading && (
        <Box
          width="100%"
          height="100px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      )}

      {!isLoading && sortArr.length === 0 && (
        <Typography variant="h6" textAlign="center" marginBottom={2} mt={2}>
          {language === "en"
            ? "Lessons this month are not yet scheduled"
            : "Уроки в цьому місяці ще незапланованi "}
        </Typography>
      )}
    </TableContainer>
  );
}
