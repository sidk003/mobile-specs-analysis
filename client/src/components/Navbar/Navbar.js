import React, { useState } from "react";
import classNames from "classnames";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  Box,
} from "@material-ui/core";
import { Searchbar } from "./Searchbar/Searchbar";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import { mainList, ListItems } from "../Sidebar/ListItems";
import useStyles from "./Styles";

export const Navbar = ({ darkState, handleThemeChange, GetDrawerState }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
    GetDrawerState(open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar disableGutters={true}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={classes.menuButton}
          >
            <MenuIcon
              classes={{
                root: open
                  ? classes.menuButtonIconOpen
                  : classes.menuButtonIconClosed,
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.grow}
            noWrap
          >
            Mobile Specs Analysis
          </Typography>
          <Box className={classes.rightComponents}>
            <div className={classes.searchbar}>
              <Searchbar />
            </div>
            <div className={classes.themeToggle}>
              <IconButton onClick={handleThemeChange}>
                {darkState ? <Brightness5Icon /> : <NightsStayIcon />}
              </IconButton>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar} />
        <List>{mainList}</List>
        <Divider />
        <List>
          <ListItems />
        </List>
      </Drawer>
    </div>
  );
};
