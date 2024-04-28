import { Box, Button, Typography } from "@mui/material";
import Level1Beginner from "/src/downloads/english-for-everyone/English-for-Everyone.-Level-1-Beginner.-Course-Book.-2016-184p..pdf";
import { ImageWrapper, Wrapper } from "./EnglishforEveryone.styled";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useContext } from "react";
import { RootContext } from "../../../main";

const EnglishforEveryone = () => {
  const { language } = useContext(RootContext);
  return (
    <>
      <Wrapper>
        <Box>
          <ImageWrapper />
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
            {language === "en"
              ? "English For Everyone Level 1 Course Book"
              : "Підручник з курсу англійської мови для всіх, рівень 1"}
          </Typography>
          <a href={Level1Beginner} download>
            <Button
              variant="contained"
              size="small"
              startIcon={<PictureAsPdfIcon />}
              endIcon={<CloudDownloadIcon />}
            >
              {language === "en" ? "DownLoad" : "Завантажити"}
            </Button>
          </a>
        </Box>
      </Wrapper>
    </>
  );
};

export default EnglishforEveryone;
