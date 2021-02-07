import React, { useState } from "react";
import useStyles from "./Styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
} from "@material-ui/core";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import MenuIcon from "@material-ui/icons/Menu";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
// import clsx from "clsx";

export const Navbar = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(true);
  // var anchorEl = null;
  const [anchorEl, setAnchorEl] = useState(null);
  const BoolOpen = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    // setOpen(true);
    setOpen(!open);
  };
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  const handleMenu = (event) => {
    // this.setState({ anchorEl: event.currentTarget });
    // anchorEl = event.currentTarget;
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    // this.setState({ anchorEl: null });
    // anchorEl = null;
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        fooJon={classNames(classes.appBar, {
          [classes.appBarShift]: BoolOpen,
        })}
      >
        <Toolbar disableGutters={true}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={classes.menuButton}
          >
            <MenuIcon
              classes={{
                root: BoolOpen
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
          <div>
            <IconButton
              aria-owns={BoolOpen ? "menu-appbar" : undefined}
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={BoolOpen}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
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
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
    // <div className={classes.root}>
    //   <AppBar
    //     position="absolute"
    //     className={clsx(classes.appBar, open && classes.appBarShift)}
    //   >
    //     <CssBaseline />
    //     <Toolbar className={classes.toolbar}>
    //       <IconButton
    //         edge="start"
    //         color="inherit"
    //         aria-label="open drawer"
    //         onClick={handleDrawerOpen}
    //         className={clsx(
    //           classes.menuButton,
    //           open && classes.menuButtonHidden
    //         )}
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography
    //         component="h1"
    //         variant="h6"
    //         color="inherit"
    //         noWrap
    //         className={classes.title}
    //       >
    //         Logo
    //       </Typography>
    //       <IconButton onClick={handleThemeChange}>
    //         {darkState ? <Brightness5Icon /> : <NightsStayIcon />}
    //       </IconButton>
    //     </Toolbar>
    //   </AppBar>
    // </div>
  );
};
