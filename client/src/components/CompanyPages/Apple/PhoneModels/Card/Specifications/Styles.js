import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  specification: {
    fontSize: 24,
    fontFamily: "serif",

    // color: theme.palette.secondary.main,
  },
  icon: {
    marginBottom: -2,
    // For mobiles
    [theme.breakpoints.down(450)]: {
      marginBottom: -7,
      marginRight: 20,
    },
    // For 1366*768
    [theme.breakpoints.between(1000, 1366)]: {
      marginRight: 250,
    },
    marginRight: 250,
    fontSize: 30,
    color: theme.palette.secondary.main,
  },
}));
