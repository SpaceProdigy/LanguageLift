import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { RootContext } from "../../main";
import PropTypes from "prop-types";
SelectPlace.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};

export default function SelectPlace({ register, errors }) {
  const { language } = React.useContext(RootContext);

  return (
    <>
      <FormControl sx={{ width: "100%", maxWidth: 400 }}>
        <InputLabel>
          {language === "en" ? "Choose a place" : "Виберіть місце"}
        </InputLabel>
        <Select
          label={language === "en" ? "Choose a place" : "Виберіть місце"}
          {...register("location")}
          defaultValue={"Zwanenhof"}
        >
          <MenuItem value={"Zwanenhof"}>Zwanenhof</MenuItem>
          <MenuItem value={"Maria Mediatrix	"}>Maria Mediatrix </MenuItem>
        </Select>
        <FormHelperText sx={{ height: 30, ml: 0 }} error>
          {errors.place?.message}
        </FormHelperText>
      </FormControl>
    </>
  );
}
