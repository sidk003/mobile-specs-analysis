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
    marginRight: 300,
    fontSize: 30,
    color: theme.palette.secondary.main,
  },
}));
