import { Box, Divider, Typography } from "@mui/material";

import { useContext, useEffect, useState } from "react";
import { M_QuoteWrapper } from "./Footer.styled";
import { quotes } from "../../locales/footer";
import { RootContext } from "../../main";

export const Footer = () => {
  const { language } = useContext(RootContext);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes[language]?.length);
      return quotes[language][randomIndex];
    };
    setQuote(getRandomQuote());
  }, [language]);

  return (
    <>
      <Divider />
      <Box
        sx={{
          minHeight: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <M_QuoteWrapper>
          <Typography textAlign="center" variant="caption">
            {quote}
          </Typography>
        </M_QuoteWrapper>
      </Box>
    </>
  );
};
