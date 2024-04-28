import { Box, styled } from "@mui/material";
import level1course from "/src/pictures/english-for-everyone/level1course.jpg";

export const ImageWrapper = styled(Box)`
  width: 100px;
  height: 133px;
  background-image: url(${level1course});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
`;

export const Wrapper = styled(Box)`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  gap: 20px;
  position: relative;
  /* border: 1px solid ${({ theme }) => theme.palette.divider}; */
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
`;
