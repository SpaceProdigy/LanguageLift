import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import {
  ImageWrapper,
  Wrapper,
  WrapperInfo,
} from "./EnglishforEveryone.styled";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useContext, useState } from "react";
import { RootContext } from "../../../main";
import { Password } from "../../../components/Password/Password";
import { enEveryOne } from "../../../locales/downloads/enEveryOne";
import LinkIcon from "@mui/icons-material/Link";
import HttpIcon from "@mui/icons-material/Http";

const EnglishforEveryone = () => {
  const [isSearch, setIsSearch] = useState("");

  const { language } = useContext(RootContext);
  const filterResult = enEveryOne.filter(({ name }) => {
    return (
      name["en"]
        .toLocaleLowerCase()
        .includes(isSearch.toLocaleLowerCase().trim()),
      name["ua"]
        .toLocaleLowerCase()
        .includes(isSearch.toLocaleLowerCase().trim())
    );
  });

  return (
    <Wrapper>
      <Password />
      <FormControl>
        <InputLabel size="small">
          {language === "en" ? "Search" : "Пошук"}
        </InputLabel>
        <OutlinedInput
          label="Search"
          size="small"
          onChange={(e) => setIsSearch(e.target.value)}
          value={isSearch}
        />
        <FormHelperText sx={{ height: 20 }}>
          {language === "ua" ? "Нічого не знайдено" : "Nothing found"}
        </FormHelperText>
      </FormControl>
      {filterResult.map(({ name, link, img }, index) => (
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
