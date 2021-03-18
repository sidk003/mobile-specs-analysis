import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 220;
const drawerWidthMobile = "100vw";

export default makeStyles((theme) => ({
  root: {
    // marginLeft: `calc(100% - ${drawerWidth}px)`,
    // [theme.breakpoints.down(700)]: {
    //   width: 500,
    // },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflowX: "hidden",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // For mobiles
  },
  appBarShift: {
    marginLeft: drawerWidth,

    // For mobiles
    [theme.breakpoints.down(450)]: {
      marginLeft: drawerWidthMobile,
    },

    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down(450)]: {
      width: `calc(100% - ${drawerWidthMobile}px)`,
    },

    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonIconClosed: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: "rotate(0)",
  },
  menuButtonIconOpen: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: "rotate(180deg)",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    [theme.breakpoints.down(450)]: {
      width: drawerWidthMobile,
    },
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    [theme.breakpoints.down(450)]: {
      width: drawerWidthMobile,
    },
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    // dont show left bar in mobiles
    [theme.breakpoints.down(450)]: {
      display: "none",
    },
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  grow: {
    flexGrow: 1,
    [theme.breakpoints.down(700)]: {
      display: "none",
    },
  },
  rightComponents: {
    display: "flex",
  },
  searchbar: {
    paddingTop: 7,
    width: 300,

    // For mobile Phones

    //280*653 phones
    [theme.breakpoints.down(299)]: {
      width: 140,
    },

    // 320*568 phones
    [theme.breakpoints.between(300, 339)]: {
      width: 180,
    },

    // 360*640 phones
    [theme.breakpoints.between(340, 361)]: {
      width: 215,
    },

    // 375*667 phones
    [theme.breakpoints.between(365, 390)]: {
      width: 235,
    },

    // 414*896 phones
    [theme.breakpoints.between(400, 470)]: {
      width: 260,
    },
  },
}));
