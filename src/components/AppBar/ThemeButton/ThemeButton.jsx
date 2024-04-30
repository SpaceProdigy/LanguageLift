import { Box, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export const ThemeButton = ({ setModeTheme, modeTheme }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <motion.div
        style={{ position: "absolute" }}
        whileTap={{ scale: 0.9 }}
        animate={{ scale: modeTheme === "light" ? 0 : 1 }}
      >
        <IconButton
          onClick={() =>
            setModeTheme((prevMode) =>
              prevMode === "light" ? "dark" : "light"
            )
          }
        >
          <LightModeIcon />
        </IconButton>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.9 }}
        animate={{ scale: modeTheme === "light" ? 1 : 0 }}
      >
        <IconButton
          onClick={() =>
            setModeTheme((prevMode) =>
              prevMode === "light" ? "dark" : "light"
            )
          }
        >
          <ModeNightIcon />
        </IconButton>
      </motion.div>
    </Box>
  );
};

ThemeButton.propTypes = {
  setModeTheme: PropTypes.func.isRequired,
  modeTheme: PropTypes.oneOf(["light", "dark"]).isRequired,
};
