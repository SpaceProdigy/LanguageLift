import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeButton } from "./ThemeButton/ThemeButton";
import DrawerMenu from "../DrawerMenu/DrawerMenu";
import icon from "/src/pictures/appBar/eng256x256.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { LanguageButton } from "./LanguageButton/LanguageButton";
import { useDispatch } from "react-redux";
import { setAppBarDrawer } from "../../redux/localOperation";

export const HeaderBar = () => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: "100%", maxWidth: 2048 }}>
      <AppBar position="static">
        <Toolbar
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => dispatch(setAppBarDrawer(true))}
            >
              <MenuIcon />
            </IconButton>
            <NavLink
              to="/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <motion.div whileTap={{ scale: 0.95 }}>
                <Box style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <img src={icon} width={30} />
                  <Typography
                    variant="subtitle1"
                    component="h6"
                    sx={{ flexGrow: 1 }}
                  >
                    Language lift
                  </Typography>
                </Box>
              </motion.div>
            </NavLink>
          </Box>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <LanguageButton />
            <DrawerMenu />
            <ThemeButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
