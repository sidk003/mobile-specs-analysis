import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import useStyles from "./Styles";

// const drawerWidth = 220;

// const styles = (theme) => ({
//   root: {
//     display: "flex",
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginLeft: 12,
//     marginRight: 36,
//   },
//   menuButtonIconClosed: {
//     transition: theme.transitions.create(["transform"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     transform: "rotate(0deg)",
//   },
//   menuButtonIconOpen: {
//     transition: theme.transitions.create(["transform"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     transform: "rotate(180deg)",
//   },
//   hide: {
//     display: "none",
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: "nowrap",
//   },
//   drawerOpen: {
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerClose: {
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: "hidden",
//     width: theme.spacing.unit * 7 + 1,
//     [theme.breakpoints.up("sm")]: {
//       width: theme.spacing.unit * 9 + 1,
//     },
//   },
//   toolbar: {
//     display: "flex",
//     alignItems: "center",
//     marginTop: theme.spacing.unit,
//     justifyContent: "flex-end",
//     padding: "0 8px",
//     ...theme.mixins.toolbar,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing.unit * 3,
//   },
//   grow: {
//     flexGrow: 1,
//   },
// });

export const Navbar = ({ darkState, handleThemeChange }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  // var anchorEl = null;
  const [anchorEl, setAnchorEl] = useState(null);
  const BoolOpen = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    // setOpen(true);
    setOpen(!open);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

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
            <IconButton onClick={handleThemeChange}>
              {darkState ? <Brightness5Icon /> : <NightsStayIcon />}
            </IconButton>
            {/* <IconButton
              aria-owns={BoolOpen ? "menu-appbar" : undefined}
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
            {/* <Menu
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
            </Menu> */}
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
  );
};

// class MiniDrawer extends React.Component {
//   state = {
//     open: false,
//     anchorEl: null,
//   };

//   handleDrawerOpen = () => {
//     this.setState({ open: !this.state.open });
//   };

//   handleDrawerClose = () => {
//     this.setState({ open: false });
//   };

//   handleMenu = (event) => {
//     this.setState({ anchorEl: event.currentTarget });
//   };
//   handleClose = () => {
//     this.setState({ anchorEl: null });
//   };

//   render() {
//     const { classes, theme } = this.props;
//     const { anchorEl } = this.state;
//     const open = Boolean(anchorEl);
//     // const [open, setOpen] = useState(false);
//     return (
// <div className={classes.root}>
//   <CssBaseline />
//   <AppBar
//     position="fixed"
//     className={classes.appBar}
//     fooJon={classNames(classes.appBar, {
//       [classes.appBarShift]: this.state.open,
//     })}
//   >
//     <Toolbar disableGutters={true}>
//       <IconButton
//         color="inherit"
//         aria-label="Open drawer"
//         onClick={this.handleDrawerOpen}
//         className={classes.menuButton}
//       >
//         <MenuIcon
//           classes={{
//             root: this.state.open
//               ? classes.menuButtonIconOpen
//               : classes.menuButtonIconClosed,
//           }}
//         />
//       </IconButton>
//       <Typography
//         variant="h6"
//         color="inherit"
//         className={classes.grow}
//         noWrap
//       >
//         Mini variant menu++
//       </Typography>
//       <div>
//         <IconButton
//           aria-owns={open ? "menu-appbar" : undefined}
//           aria-haspopup="true"
//           onClick={this.handleMenu}
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <Menu
//           id="menu-appbar"
//           anchorEl={anchorEl}
//           anchorOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//           open={open}
//           onClose={this.handleClose}
//         >
//           <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//           <MenuItem onClick={this.handleClose}>My account</MenuItem>
//         </Menu>
//       </div>
//     </Toolbar>
//   </AppBar>
//   <Drawer
//     variant="permanent"
//     className={classNames(classes.drawer, {
//       [classes.drawerOpen]: this.state.open,
//       [classes.drawerClose]: !this.state.open,
//     })}
//     classes={{
//       paper: classNames({
//         [classes.drawerOpen]: this.state.open,
//         [classes.drawerClose]: !this.state.open,
//       }),
//     }}
//     open={this.state.open}
//   >
//     <div className={classes.toolbar} />
//     <List>
//       {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//         <ListItem button key={text}>
//           <ListItemIcon>
//             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//           </ListItemIcon>
//           <ListItemText primary={text} />
//         </ListItem>
//       ))}
//     </List>
//     <Divider />
//     <List>
//       {["All mail", "Trash", "Spam"].map((text, index) => (
//         <ListItem button key={text}>
//           <ListItemIcon>
//             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//           </ListItemIcon>
//           <ListItemText primary={text} />
//         </ListItem>
//       ))}
//     </List>
//   </Drawer>
// </div>
//     );
//   }
// }

// MiniDrawer.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired,
// };

// export default withStyles(styles, { withTheme: true })(MiniDrawer);
