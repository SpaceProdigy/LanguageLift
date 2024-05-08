import { Typography } from "@mui/material";
import { About } from "../../components/About/About";
import { TypingText, homeInfo } from "../../locales/home";
import { Hero, WrapperHero, WrapperTitel } from "./Home.styled";
import { ReactTyped } from "react-typed";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";

const Home = () => {
  const language = useSelector(selectLanguage);

  return (
    <>
      <WrapperHero>
        <Hero></Hero>

        <WrapperTitel>
          <Typography textAlign="center" variant="h4">
            Language lift
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
