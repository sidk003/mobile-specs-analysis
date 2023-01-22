import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Apple } from "../CompanyPages/Apple/Apple";
import { Google } from "../CompanyPages/Google/Google";
import { Huawei } from "../CompanyPages/Huawei/Huawei";
import { Oneplus } from "../CompanyPages/Oneplus/Oneplus";
import { Samsung } from "../CompanyPages/Samsung/Samsung";
import { Xiaomi } from "../CompanyPages/Xiaomi/Xiaomi";
import { BackToTop } from "../ScrollToTop/BackToTop";
import { CssBaseline, Box, Fab, Toolbar, Container } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Footer } from "../Footer/Footer";
import { About } from "../LandingPage/About/About";
import { Navbar } from "../Navbar/Navbar";
import useStyles from "./Styles";

export const LandingPage = () => {
  // Add about ML we using on about-us page
  const [darkState, setDarkState] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  var showContent = true;

  const bgImageLight = "url(https://i.redd.it/qwd83nc4xxf41.jpg)";
  const bgImageDark = "url(https://cdn.wallpapersafari.com/69/10/CEokAi.jpg)";
  const bgDark = "#121212";
  const bgLight = "#FAFAFA";
  const cardDark = "#1A1A1A";
  const cardLight = "#FFF";
  const headDark = "#C91818";
  const headLight = "#007FFF";
  const secondaryDark = "#C91818";
  const secondaryLight = "#007FFF";

  const palletType = darkState ? "dark" : "light";
  const bgTheme = darkState ? bgDark : bgLight;
  const cardColor = darkState ? cardDark : cardLight;
  const mainPrimaryColor = darkState ? headDark : headLight;
  const mainSecondaryColor = darkState ? secondaryDark : secondaryLight;
  const bgImage = darkState ? bgImageDark : bgImageLight;
  const darkTheme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            backgroundImage: bgImage,
          },
        },
      },
    },
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      background: {
        default: bgTheme,
        paper: cardColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  const classes = useStyles({ drawerOpen: drawerOpen });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const GetDrawerState = (open) => {
    setDrawerOpen(open);
  };
  // To check if device is a mobile
  var isMobile = false;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  )
    isMobile = true;

  if (drawerOpen === true && isMobile === true) showContent = false;
  else showContent = true;

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <div className={classes.root}>
          <CssBaseline />
          <Navbar
            darkState={darkState}
            handleThemeChange={handleThemeChange}
            GetDrawerState={GetDrawerState}
            setDrawerOpen={setDrawerOpen}
          />
          {showContent && (
            <Box className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Toolbar id="back-to-top-anchor" />
              <Container className={classes.container}>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <About drawerOpen={drawerOpen} />}
                  />
                  <Route
                    path="/apple"
                    render={() => (
                      <Apple darkState={darkState} drawerOpen={drawerOpen} />
                    )}
                  />
                  <Route path="/google" component={Google} />
                  <Route path="/huawei" component={Huawei} />
                  <Route path="/oneplus" component={Oneplus} />
                  <Route path="/samsung" component={Samsung} />
                  <Route path="/xiaomi" component={Xiaomi} />
                </Switch>
                <BackToTop>
                  <Fab
                    color="secondary"
                    size="large"
                    aria-label="scroll back to top"
                  >
                    <KeyboardArrowUp />
                  </Fab>
                </BackToTop>
                <Box pt={4}>
                  <Footer />
                </Box>
              </Container>
            </Box>
          )}
        </div>
      </ThemeProvider>
    </Router>
  );
};
