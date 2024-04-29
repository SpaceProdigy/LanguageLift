import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import PropTypes from "prop-types";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import { StyledNavLink } from "./DrawerMenu.styled";
import { buttonAuthText, buttonText } from "../../locales/drawerMenu";
import { useContext } from "react";
import { RootContext } from "../../main";

export default function DrawerMenu({ toggleDrawer, open }) {
  const { language } = useContext(RootContext);
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {buttonText.map(({ text, path }, index) => (
          <ListItem key={index} disablePadding>
            <StyledNavLink to={path}>
              <ListItemButton>
                <ListItemIcon>
                  {path === "/" && <HomeIcon />}
                  {path === "/english-for-everyone" && <LibraryBooksIcon />}
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
              <ListItemButton>
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
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

DrawerMenu.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};
