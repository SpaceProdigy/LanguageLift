import React, { createContext, useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import mainTheme from "./styles/theme";

export const RootContext = createContext();

const Root = () => {
  const [isDrawer, setIsDrawer] = useState(false);
  const [modeTheme, setModeTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  const [language, setLanguage] = useState(
    localStorage.getItem("language") ? localStorage.getItem("language") : "en"
  );

  const theme = useMemo(() => {
    localStorage.setItem("theme", modeTheme);
    return mainTheme(modeTheme);
  }, [modeTheme]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <React.StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <RootContext.Provider
          value={{
            theme,
            modeTheme,
            setModeTheme,
            language,
            setLanguage,
            isDrawer,
            setIsDrawer,
          }}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme={true}>
              <App />
            </CssBaseline>
          </ThemeProvider>
        </RootContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
