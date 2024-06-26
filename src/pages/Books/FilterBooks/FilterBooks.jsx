import { nanoid } from "@reduxjs/toolkit";
import { motion } from "framer-motion";
import { ImageWrapper, WrapperInfo } from "./FilterBooks.styled";
import { Box, Button, Typography } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import LinkIcon from "@mui/icons-material/Link";
import HttpIcon from "@mui/icons-material/Http";
import PropTypes from "prop-types";

FilterBooks.propTypes = {
  filterResult: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired,
};

export default function FilterBooks({ filterResult, language }) {
  return (
    <>
      {filterResult.map(({ name, link, img }) => (
        <motion.div
          key={nanoid()}
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
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="contained"
                  size="small"
                  startIcon={
                    !img.includes("audio") ? <PictureAsPdfIcon /> : <HttpIcon />
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
    </>
  );
}
