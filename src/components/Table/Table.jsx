import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RootContext } from "../../main";
import { useContext } from "react";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  deleteDataToFirestore,
  getDataToFirestore,
} from "../../../firestoreFunctions/dbFunctions";
import { notify } from "../AlertComponent/notify";

BasicTable.propTypes = {
  actualSchedule: PropTypes.array.isRequired,
  setActualSchedul: PropTypes.func.isRequired,
  permission: PropTypes.bool.isRequired,
};

export default function BasicTable({
  actualSchedule,
  setActualSchedul,
  permission,
}) {
  const { language } = useContext(RootContext);

  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "1px 1px 10px 1px rgba(0,0,0,0.05)",
      }}
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
            {permission && (
              <TableCell align="center">
                {language === "en" ? "Delete" : "Видалити"}
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {actualSchedule.map(({ id, date, time, location }, index) => (
            <TableRow
              key={index}
              id={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{location}</TableCell>
              <TableCell align="center">{date}</TableCell>
              <TableCell align="center" sx={{ whiteSpace: "nowrap" }}>
                {time}
              </TableCell>
              {permission && (
                <TableCell align="center">
                  <IconButton
                    color="error"
                    onClick={async () => {
                      try {
                        const result = await deleteDataToFirestore(
                          "lessonsWithJill",
                          id
                        );

                        if (result) {
                          const getResult = await getDataToFirestore(
                            "lessonsWithJill",
                            setActualSchedul
                          );

                          if (getResult) {
                            notify(
                              "success",
                              language === "en"
                                ? "File deleted successfully"
                                : "Файл успішно видалено"
                            );
                          }
                        }
                      } catch (e) {
                        console.log(e);
                        notify(
                          "error",
                          language === "en"
                            ? "Something went wrong, please try again later"
                            : "Щось пішло не так, спробуйте пізніше"
                        );
                      }
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
