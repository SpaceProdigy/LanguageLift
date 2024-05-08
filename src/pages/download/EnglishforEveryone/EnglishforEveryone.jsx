import { useState } from "react";
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

import { Password } from "../../../components/Password/Password";
import { enEveryOne } from "../../../locales/downloads/enEveryOne";
import LinkIcon from "@mui/icons-material/Link";
import HttpIcon from "@mui/icons-material/Http";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../redux/localOperation";

const EnglishforEveryone = () => {
  const [isSearch, setIsSearch] = useState("");

  const language = useSelector(selectLanguage);
  const filterResult = enEveryOne.filter(({ name }) => {
    return (
      name["en"]
        .toLocaleLowerCase()
        .includes(isSearch.toLocaleLowerCase().trim()) ||
      name["ua"]
        .toLocaleLowerCase()
        .includes(isSearch.toLocaleLowerCase().trim())
    );
  });

  return (
    <Wrapper>
      <Password
        passwordKey={"1234"}
        sessionKey={"English-For-Everyone"}
        buttonBack={true}
        openWithInitilizat={true}
      />
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <FormControl size="small" fullWidth sx={{ maxWidth: 400 }}>
          <InputLabel>{language === "en" ? "Search" : "Пошук"}</InputLabel>
          <OutlinedInput
            label="Search"
            onChange={(e) => setIsSearch(e.target.value)}
            value={isSearch}
          />
          <FormHelperText sx={{ height: 20 }}>
            {filterResult.length === 0 &&
              (language === "ua" ? "Нічого не знайдено" : "Nothing found")}
          </FormHelperText>
        </FormControl>
      </Box>
      <AnimatePresence>
        {filterResult.map(({ name, link, img }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WrapperInfo>
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
                <a
                  href={link}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={
                      !img.includes("audio") ? (
                        <PictureAsPdfIcon />
                      ) : (
                        <HttpIcon />
                      )
                    }
                    endIcon={
                      !img.includes("audio") ? (
                        <CloudDownloadIcon />
                      ) : (
                        <LinkIcon />
                      )
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
          </motion.div>
        ))}
      </AnimatePresence>
    </Wrapper>
  );
};

export default EnglishforEveryone;
