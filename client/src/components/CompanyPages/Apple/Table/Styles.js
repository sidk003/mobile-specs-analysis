import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    // For 360*640
    [theme.breakpoints.down(365)]: {
      width: 340,
      marginLeft: -15,
    },

    // For 375*667
    [theme.breakpoints.between(365, 400)]: {
      width: 355,
      marginLeft: -15,
    },

    // For 414*896
    [theme.breakpoints.between(401, 450)]: {
      width: 380,
      marginLeft: -10,
    },

    width: "100%",
    marginTop: 30,
    marginLeft: 30,
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    width: "100%",
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));
