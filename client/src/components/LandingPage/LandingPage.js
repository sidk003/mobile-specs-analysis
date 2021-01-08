import React, { useState } from "react";
import { CssBaseline, Box, Container } from "@material-ui/core";
import { lightBlue, deepPurple, purple } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Footer from "../Footer/Footer";
import { About } from "./About/About";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";
import useStyles from "./Styles";

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? purple[800] : lightBlue[700];
  const mainSecondaryColor = darkState ? deepPurple[100] : deepPurple[100];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
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
            <About />
            <Box pt={4}>
              <Footer />
            </Box>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}
