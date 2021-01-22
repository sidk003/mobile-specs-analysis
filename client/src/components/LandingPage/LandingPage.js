import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Apple } from "../CompanyPages/Apple/Apple";
import { Google } from "../CompanyPages/Google/Google";
import { Huawei } from "../CompanyPages/Huawei/Huawei";
import { Oneplus } from "../CompanyPages/Oneplus/Oneplus";
import { Samsung } from "../CompanyPages/Samsung/Samsung";
import { Xiaomi } from "../CompanyPages/Xiaomi/Xiaomi";
import { CssBaseline, Box, Container } from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Footer from "../Footer/Footer";
import { About } from "./About/About";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";
import useStyles from "./Styles";

export default function LandingPage() {
  // Add about ML we using on about-us page
  const [open, setOpen] = useState(true);
  const [darkState, setDarkState] = useState(true);

  const bgDark = "#121212";
  const bgLight = "#FAFAFA";
  const cardDark = "#1A1A1A";
  const cardLight = "#FFF";
  const headDark = "#3700B3";

  const palletType = darkState ? "dark" : "light";
  const bgTheme = darkState ? bgDark : bgLight;
  const cardColor = darkState ? cardDark : cardLight;
  const mainPrimaryColor = darkState ? headDark : lightBlue[700];
  const mainSecondaryColor = darkState ? "#03DAC5" : "#03DAC5";
  const darkTheme = createMuiTheme({
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

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <Navbar
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            darkState={darkState}
            handleThemeChange={handleThemeChange}
          />
          <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
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
      </Router>
    </ThemeProvider>
  );
}
