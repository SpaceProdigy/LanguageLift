import { Typography } from "@mui/material";
import { About } from "../../components/About/About";
import { TypingText, homeInfo } from "../../locales/home";
import { Hero, WrapperHero, WrapperTitel } from "./Home.styled";
import { ReactTyped } from "react-typed";
import { useContext } from "react";
import { RootContext } from "../../main";

const Home = () => {
  const { language } = useContext(RootContext);

  return (
    <>
      <WrapperHero>
        <Hero></Hero>

        <WrapperTitel>
          <Typography textAlign="center" variant="h4">
            Language Lift
          </Typography>
          <Typography variant="body2" textAlign="center" marginTop={1}>
            <ReactTyped
              strings={[TypingText[language]]}
              typeSpeed={70}
              cursorChar={""}
            />
          </Typography>
        </WrapperTitel>
      </WrapperHero>

      <About arr={homeInfo[language]} />
    </>
  );
};

export default Home;
