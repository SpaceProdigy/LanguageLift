import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";

import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { StyledNavLink } from "./DrawerMenu.styled";
import { buttonAuthText, buttonText } from "../../locales/drawerMenu";

import { useLocation } from "react-router-dom";
import {
  selectAppBarDrawer,
  selectLanguage,
  setAppBarDrawer,
} from "../../redux/localOperation";
import { useDispatch, useSelector } from "react-redux";

export default function DrawerMenu() {
  const { pathname } = useLocation();
  const language = useSelector(selectLanguage);
  const appDruwerBar = useSelector(selectAppBarDrawer);

  const dispatch = useDispatch();

  const toggleDrawer = (value) => {
    dispatch(setAppBarDrawer(value));
  };

  const theme = useTheme();

  const DrawerList = (
    <Box
      sx={{ width: 250, height: "100%" }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List>
        {buttonText.map(({ text, path }, index) => (
          <ListItem key={index} disablePadding>
            <StyledNavLink to={path} state={pathname}>
              <ListItemButton
                sx={{
                  background:
                    pathname === path && theme.palette.action.selected,
                }}
              >
                <ListItemIcon>
                  {path === "/" && <HomeIcon />}
                  {path === "/english-for-everyone" && <LibraryBooksIcon />}
                  {path === "/schedule-of-lessons-with-jill" && (
                    <CalendarMonthIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text[language]} />
              </ListItemButton>
            </StyledNavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {buttonAuthText.map(({ text, path }, index) => (
          <ListItem key={index} disablePadding>
            <StyledNavLink to={path}>
              <ListItemButton
                sx={{
                  background:
                    pathname === path && theme.palette.action.selected,
                }}
              >
                <ListItemIcon>
                  {path === "/signup" && <AppRegistrationIcon />}
                  {path === "/signin" && <LoginIcon />}
                </ListItemIcon>
                <ListItemText primary={text[language]} />
              </ListItemButton>
            </StyledNavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={appDruwerBar} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
