import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    // media queries to be added
    // For 360*640
    [theme.breakpoints.down(365)]: {
      width: 340,
      marginLeft: -15,
    },

    // For 375*667
    [theme.breakpoints.between(365, 400)]: {
      width: 353,
      marginLeft: -15,
    },

    // For 414*896
    [theme.breakpoints.between(401, 450)]: {
      width: 380,
      marginLeft: -10,
    },
    // For 1366*768
    [theme.breakpoints.between(1000, 1366)]: {
      width: "80%",
      marginLeft: 130,
    },
    width: "100%",
    marginTop: 50,
    marginBottom: 100,
    marginLeft: 30,
    // transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    paddingTop: "56.25%",
  },
  content: {
    textAlign: "left",
    padding: theme.spacing(3),
    // For 360*640
    [theme.breakpoints.down(365)]: {
      padding: 5,
    },

    // For 375*667
    [theme.breakpoints.between(365, 400)]: {
      padding: 5,
    },

    // For 414*896
    [theme.breakpoints.between(401, 450)]: {
      padding: 5,
    },
  },
  divider: {
    margin: `${theme.spacing(2)}px 0`,
  },
  subheading: {
    marginLeft: 5,
    fontSize: 14,
    // color: theme.palette.secondary.main,
  },
  heading: {
    fontSize: 36,
    marginLeft: 15,
    fontFamily: "serif",
  },
}));
