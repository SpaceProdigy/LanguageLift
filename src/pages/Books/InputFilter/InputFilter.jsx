import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import PropTypes from "prop-types";

InputFilter.propTypes = {
  filterResult: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired,
  setIsSearch: PropTypes.func.isRequired,
  isSearch: PropTypes.string.isRequired,
};

export default function InputFilter({
  filterResult,
  language,
  setIsSearch,
  isSearch,
}) {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <FormControl size="small" fullWidth sx={{ maxWidth: 400 }}>
        <InputLabel>{language === "en" ? "Search" : "Пошук"}</InputLabel>
        <OutlinedInput
          label="Search"
          onChange={(e) => setIsSearch(e.target.value)}
          value={isSearch}
        />
        <FormHelperText sx={{ height: 20 }}>
          {filterResult.length === 0 &&
            (language === "ua" ? "Нічого не знайдено" : "Nothing found")}
        </FormHelperText>
      </FormControl>
    </Box>
  );
}
