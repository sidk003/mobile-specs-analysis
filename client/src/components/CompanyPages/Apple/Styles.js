import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  content: {
    // media queries to be added
    // For 360*640
    [theme.breakpoints.down(365)]: {
      width: 300,
    },

    // For 375*667
    [theme.breakpoints.between(365, 400)]: {
      width: 330,
    },

    // For 414*896
    [theme.breakpoints.between(401, 450)]: {
      width: 330,
    },
    // For 1366*768
    [theme.breakpoints.between(1000, 1366)]: {
      marginLeft: (props) => props.LeftMarginHD,
    },
    // For biggest screen sizes (1920*1080)
    [theme.breakpoints.up(1367)]: {
      marginLeft: (props) => props.LeftMarginFHD,
    },

    width: 1000,
    marginTop: -80,
  },
  analytics: {
    width: "100%",
  },
  divider: {
    // media queries to be added
    // For 360*640
    [theme.breakpoints.down(365)]: {
      width: "105%",
    },

    [theme.breakpoints.between(365, 380)]: {
      width: "100%",
    },
    [theme.breakpoints.between(381, 450)]: {
      width: "110%",
    },
    width: "100%",
    marginTop: 30,
    marginBottom: 30,
  },
  header: {
    // For 360*640
    [theme.breakpoints.down(365)]: {
      fontSize: 24,
      marginLeft: 70,
    },

    // For 375*667
    [theme.breakpoints.between(365, 400)]: {
      fontSize: 24,
      marginLeft: 75,
    },

    // For 414*896
    [theme.breakpoints.between(401, 450)]: {
      fontSize: 24,
      marginLeft: 90,
    },
    fontSize: 34,
    marginLeft: 390,
  },
}));
