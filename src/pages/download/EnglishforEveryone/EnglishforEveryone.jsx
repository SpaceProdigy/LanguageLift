import { Box, Button, Typography } from "@mui/material";
import {
  ImageWrapper,
  Wrapper,
  WrapperInfo,
} from "./EnglishforEveryone.styled";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useContext } from "react";
import { RootContext } from "../../../main";
import { Password } from "../../../components/Password/Password";
import { enEveryOne } from "../../../locales/downloads/enEveryOne";
import LinkIcon from "@mui/icons-material/Link";
import HttpIcon from "@mui/icons-material/Http";

const EnglishforEveryone = () => {
  const { language } = useContext(RootContext);
  return (
    <Wrapper>
      <Password />

      {enEveryOne.map(({ name, link, img }, index) => (
        <WrapperInfo key={index}>
          <Box>
            <ImageWrapper img={img} />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              width: 200,
            }}
          >
            <Typography variant="subtitle2" textAlign="center">
              {name[language]}
            </Typography>
            <a href={link} download target="_blank" rel="noopener noreferrer">
              <Button
                variant="contained"
                size="small"
                startIcon={
                  !img.includes("audio") ? <PictureAsPdfIcon /> : <HttpIcon />
                }
                endIcon={
                  !img.includes("audio") ? <CloudDownloadIcon /> : <LinkIcon />
                }
              >
                {!img.includes("audio")
                  ? language === "en"
                    ? "DownLoad"
                    : "Завантажити"
                  : language === "en"
                  ? "Link"
                  : "Посилання"}
              </Button>
            </a>
          </Box>
        </WrapperInfo>
      ))}
    </Wrapper>
  );
};

export default EnglishforEveryone;
