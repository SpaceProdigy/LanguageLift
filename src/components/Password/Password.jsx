import { Box, IconButton, Modal, Typography, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useContext, useEffect, useRef, useState } from "react";
import {
  NumberBox,
  StyledInput,
  StyledLink,
  Wrapper,
  WrapperBack,
  WrapperNumberBox,
} from "./Password.styled";
import { motion } from "framer-motion";
import { RootContext } from "../../main";
import { useLocation } from "react-router-dom";

export const Password = () => {
  const [open, setOpen] = useState(
    !sessionStorage.getItem("English-For-Everyone")
  );
  const [isFocus, setIsFocus] = useState(null);
  const refInput = useRef({ 1: "", 2: "", 3: "", 4: "" });
  const [password, setPassword] = useState({ 1: "", 2: "", 3: "", 4: "" });
  const key = Object.values(password).join("");
  const passwordKey = "1234";
  const theme = useTheme();
  const { language } = useContext(RootContext);
  const handleClose = () => setOpen(false);
  const keyError = key.length === 4 && passwordKey !== key;
  const keySuccess = passwordKey === key;

  const { state } = useLocation();

  useEffect(() => {
    if (keySuccess) {
      sessionStorage.setItem("English-For-Everyone", "access");

      setTimeout(() => {
        handleClose();
      }, 500);
    }
  }, [keySuccess]);

  useEffect(() => {
    if (key.length === 4) {
      refInput.current[isFocus].blur();
    }
  }, [isFocus, key.length]);

  const handleChange = (event, item) => {
    const value = event.target.value;
    const inputValue = value.replace(/\D/g, "");

    setPassword(() => {
      return { ...password, [event.target.id]: inputValue.slice(0, 1) };
    });

    if (!isNaN(value) && value !== "") {
      if (item === 4) {
        refInput.current[1].focus();
        return;
      }
      refInput.current[item + 1].focus();
    }
  };

  const handleKeyDown = (e, item) => {
    if (e.keyCode === 39) {
      if (item === 4) {
        return refInput.current[1].focus();
      }
      refInput.current[item + 1].focus();
    }
    if (e.keyCode === 37) {
      if (item === 1) {
        return refInput.current[4].focus();
      }
      refInput.current[item - 1].focus();
      refInput.current[item - 1];
    }

    if (e.keyCode === 8) {
      if (key.length === 0) {
        refInput.current[item].blur();
      }
      e.preventDefault();

      if (item === 1) {
        setPassword((prevPassword) => ({
          ...prevPassword,
          [item]: "",
        }));
        refInput.current[4].focus();
        return;
      }
      refInput.current[item - 1].focus();
      setPassword((prevPassword) => ({
        ...prevPassword,
        [item]: "",
      }));
    }
  };

  const borderNumber = (item) => {
    if (key === passwordKey) {
      return theme.palette.success.main;
    }
    if (key.length === 4 && passwordKey !== key) {
      return theme.palette.error.main;
    }

    if (password[item]) {
      return theme.palette.info.main;
    }
    return theme.palette.text.primary;
  };
  return (
    <>
      <Modal open={open}>
        <Wrapper>
          <WrapperBack>
            <StyledLink to={state}>
              <IconButton>
                <ArrowBackIcon />
              </IconButton>
            </StyledLink>
          </WrapperBack>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle2">
              {language === "en" ? "Enter password" : "Введіть пароль"}
            </Typography>

            <Box sx={{ position: "relative", width: 200, height: 50 }}>
              <WrapperNumberBox
                error={keyError ? "+" : ""}
                success={keySuccess ? "+" : ""}
              >
                {[1, 2, 3, 4].map((item, index) => (
                  <NumberBox
                    key={index}
                    tab={Number(item) <= Number(password[item]) ? "+" : ""}
                    borderColor={borderNumber(item)}
                  >
                    <StyledInput
                      ref={(el) => {
                        refInput.current[item] = el;
                      }}
                      id={item}
                      onChange={(e) => handleChange(e, item)}
                      value={password[item]}
                      autoComplete="off"
                      onKeyDown={(e) => handleKeyDown(e, item)}
                      onFocus={() => setIsFocus(item)}
                      type="tel"
                    />
                  </NumberBox>
                ))}
              </WrapperNumberBox>
            </Box>

            <motion.div
              animate={{ opacity: keyError || keySuccess ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              style={{ height: 50 }}
            >
              <Typography
                variant="caption"
                textAlign="center"
                color={
                  keyError
                    ? theme.palette.error.main
                    : theme.palette.success.main
                }
              >
                {keyError &&
                  (language === "en"
                    ? "The password is incorrect, please try again"
                    : "Пароль невірний, спробуйте ще раз")}
                {keySuccess && (language === "en" ? "Success" : "Yспіх")}
              </Typography>
            </motion.div>
          </Box>
        </Wrapper>
      </Modal>
    </>
  );
};
