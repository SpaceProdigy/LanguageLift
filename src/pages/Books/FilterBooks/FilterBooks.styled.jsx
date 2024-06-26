import { Box, styled } from "@mui/material";

export const ImageWrapper = styled(Box)`
  width: 100px;
  height: 133px;
  background-image: url(${({ img }) => img});

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
`;

export const WrapperInfo = styled(Box)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  position: relative;
  /* border: 1px solid ${({ theme }) => theme.palette.divider}; */
  /* width: 100%; */
  /* max-width: 400px; */
  border-radius: 10px;
`;
