import React from "react";
import useStyles from "./Styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";

export const Navbar = ({
  open,
  darkState,
  handleDrawerOpen,
  handleThemeChange,
}) => {
  const classes = useStyles();

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={(classes.menuButton, open)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Logo
        </Typography>
        <IconButton onClick={handleThemeChange}>
          {darkState ? <Brightness5Icon /> : <NightsStayIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
