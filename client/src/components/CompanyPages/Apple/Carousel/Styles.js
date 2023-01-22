import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  carousel: {
    display: "flex",
    overflow: "hiddden",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 15,
    marginLeft: 720,
    height: 640,
    width: 360,
    // For 360*640
    [theme.breakpoints.down(365)]: {
      marginLeft: -20,
      width: 350,
    },

    // For 375*667
    [theme.breakpoints.between(365, 400)]: {
      marginLeft: -20,
      width: 360,
    },

    // For 414*896
    [theme.breakpoints.between(401, 450)]: {
      marginLeft: 0,
      width: 350,
    },
  },
  dimensions: {
    height: 640,
    width: 360,
    // For 360*640
    [theme.breakpoints.down(365)]: {
      width: 350,
    },

    // For 375*667
    [theme.breakpoints.between(365, 400)]: {
      width: 360,
    },

    // For 414*896
    [theme.breakpoints.between(401, 450)]: {
      width: 360,
    },
  },
}));
