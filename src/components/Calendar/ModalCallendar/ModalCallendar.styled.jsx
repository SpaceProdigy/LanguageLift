import { Box, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const WrapperClose = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 16px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: transparent;
`;
