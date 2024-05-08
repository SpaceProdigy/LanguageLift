import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import { useEffect } from "react";

SelectPlace.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  isEdit: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  isChooseALesson: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
  valueSelect: PropTypes.string,
  setValueSelect: PropTypes.func,
  selectError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  setSelectError: PropTypes.func,
};

export default function SelectPlace({
  valueSelect,
  setValueSelect,
  selectError,
  setSelectError,
}) {
  const language = useSelector(selectLanguage);

  useEffect(() => {
    if (valueSelect === "" || !valueSelect) {
      setSelectError(
        language === "en" ? "Plase is required" : "Необхідно вказати місце"
      );
    } else {
      setSelectError(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSelectError, valueSelect]);

  return (
    <FormControl sx={{ width: "100%", maxWidth: 400 }}>
      <InputLabel>
        {language === "en" ? "Choose a place" : "Виберіть місце"}
      </InputLabel>
      <Select
        label={language === "en" ? "Choose a place" : "Виберіть місце"}
        value={valueSelect}
        onChange={(e) => setValueSelect(e.target.value)}
      >
        <MenuItem value={"Zwanenhof"}>Zwanenhof</MenuItem>
        <MenuItem value={"Maria Mediatrix"}>Maria Mediatrix</MenuItem>
      </Select>
      <FormHelperText sx={{ height: 30, ml: 0 }} error>
        {selectError}
      </FormHelperText>
    </FormControl>
  );
}
