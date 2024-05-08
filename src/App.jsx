import { Suspense, lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Loader } from "./components/Loader/Loader";
import { HeaderBar } from "./components/AppBar/AppBar.jsx";
import { ScrollToTopButton } from "./components/ScrollToTopButton/ScrollToTopButton.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { useSelector } from "react-redux";
import { selectTheme } from "./redux/localOperation.js";
import mainTheme from "./styles/theme.js";

// ROUTS
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const EnglishforEveryone = lazy(() =>
  import("./pages/download/EnglishforEveryone/EnglishforEveryone.jsx")
);
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));
const SignIn = lazy(() => import("./pages/auth/SignIn/SignIn.jsx"));
const SignUp = lazy(() => import("./pages/auth/SignUp/SignUp.jsx"));
const Schedule = lazy(() => import("./pages/Schedule/Schedule.jsx"));
const MaterialfromJill = lazy(() =>
  import("./pages/MaterialLessons/MaterialFromJill/MaterialfromJill.jsx")
);

function App() {
  const mode = useSelector(selectTheme);

  return (
    <ThemeProvider theme={mainTheme(mode)}>
      <CssBaseline enableColorScheme={true}>
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <HeaderBar />

          <main style={{ flex: 1, width: "100%" }}>
            <Container>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/english-for-everyone"
                    element={<EnglishforEveryone />}
                  />
                  <Route
                    path="/schedule-of-lessons-with-jill"
                    element={<Schedule />}
                  />
                  <Route
                    path="/schedule-of-lessons-with-jill/:id"
                    element={<MaterialfromJill />}
                  />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Outlet />
              </Suspense>
              <ScrollToTopButton />
            </Container>
          </main>
          <footer style={{ flexShrink: 0, width: "100%", maxWidth: 2048 }}>
            <Footer />
          </footer>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
