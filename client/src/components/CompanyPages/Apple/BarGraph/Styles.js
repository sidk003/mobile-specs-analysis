import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  barGraph: {
    width: 700,
    height: 320,
    marginTop: 20,
    [theme.breakpoints.down(365)]: {
      width: 340,
      height: 320,
      marginLeft: -15,
    },

    // For 375*667
    [theme.breakpoints.between(365, 400)]: {
      width: 355,
      height: 320,
      marginLeft: -15,
    },

    // For 414*896
    [theme.breakpoints.between(401, 450)]: {
      width: 380,
      height: 320,
      marginLeft: -10,
    },
  },
}));
