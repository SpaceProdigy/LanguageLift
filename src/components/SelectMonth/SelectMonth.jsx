import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { monthArr } from "./month.js";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation.js";
SelectMonth.propTypes = {
  setSelectMonth: PropTypes.func,
  selectMonth: PropTypes.string,
};

export default function SelectMonth({ selectMonth, setSelectMonth }) {
  const language = useSelector(selectLanguage);

  return (
    <Box sx={{ maxWidth: 400, width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel>
          {language === "en" ? "Select a month" : "Виберіть місяць"}
        </InputLabel>
        <Select
          value={selectMonth}
          label={language === "en" ? "Select a month" : "Виберіть місяць"}
          onChange={(e) => setSelectMonth(e.target.value)}
        >
          {monthArr(language).map((month, index) => (
            <MenuItem
              key={month}
              value={`${index + 1}.${new Date().getFullYear()}`}
            >
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
