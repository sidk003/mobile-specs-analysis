import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Apple } from "../CompanyPages/Apple/Apple";
import { Google } from "../CompanyPages/Google/Google";
import { Huawei } from "../CompanyPages/Huawei/Huawei";
import { Oneplus } from "../CompanyPages/Oneplus/Oneplus";
import { Samsung } from "../CompanyPages/Samsung/Samsung";
import { Xiaomi } from "../CompanyPages/Xiaomi/Xiaomi";
import { CssBaseline, Box, Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Footer from "../Footer/Footer";
import { About } from "../LandingPage/About/About";
import { Navbar } from "../Navbar/Navbar";
import useStyles from "./Styles";

export const LandingPage = () => {
  // Add about ML we using on about-us page
  const [darkState, setDarkState] = useState(true);

  const bgImageLight = "url(https://i.redd.it/qwd83nc4xxf41.jpg)";
  const bgImageDark = "url(https://cdn.wallpapersafari.com/69/10/CEokAi.jpg)";

  const bgDark = "#121212";
  const bgLight = "#FAFAFA";
  const cardDark = "#1A1A1A";
  const cardLight = "#FFF";
  const headDark = "#C91818";
  const headLight = "#007FFF";

  const palletType = darkState ? "dark" : "light";
  const bgTheme = darkState ? bgDark : bgLight;
  const cardColor = darkState ? cardDark : cardLight;
  const mainPrimaryColor = darkState ? headDark : headLight;
  const mainSecondaryColor = darkState ? "#03DAC5" : "#03DAC5";
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

  const classes = useStyles();

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <div className={classes.root}>
          <CssBaseline />
          <Navbar darkState={darkState} handleThemeChange={handleThemeChange} />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="md" className={classes.container}>
              <Switch>
                <Route exact path="/" component={About} />
                <Route
                  path="/apple"
                  render={() => <Apple darkState={darkState} />}
                />
                <Route path="/google" component={Google} />
                <Route path="/huawei" component={Huawei} />
                <Route path="/oneplus" component={Oneplus} />
                <Route path="/samsung" component={Samsung} />
                <Route path="/xiaomi" component={Xiaomi} />
              </Switch>
              <Box pt={4}>
                <Footer />
              </Box>
            </Container>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
};
