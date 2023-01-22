import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  dimesions: {
    // For Mobiles

    // For 360*640
    [theme.breakpoints.down(450)]: {
      height: 168,
      width: 300,
    },
    // For Ipad
    [theme.breakpoints.between(600, 1000)]: {
      // maintaining 9:16 ratio
      height: 253,
      width: 450,
    },

    // For 1366*768
    height: 360,
    width: 640,
  },
  position: {
    // For mobiles

    // For 360*640
    [theme.breakpoints.down(365)]: {
      marginLeft: 5,
    },

    // For 375*667
    [theme.breakpoints.between(365, 400)]: {
      marginLeft: 10,
    },

    // For 414*896
    [theme.breakpoints.between(401, 450)]: {
      marginLeft: 30,
    },

    // For iPads (768*1024) To be modified
    [theme.breakpoints.between(600, 1000)]: {
      marginLeft: (props) => props.LeftMarginIpad,
    },

    // For 1366*768
    [theme.breakpoints.between(1000, 1366)]: {
      marginLeft: (props) => props.LeftMarginHD,
    },

    // For biggest screen sizes (1920*1080)
    [theme.breakpoints.up(1367)]: {
      marginLeft: (props) => props.LeftMarginFHD,
    },
    marginTop: -50,
  },
  slickSlider: {
    // For mobiles

    // For 360*640
    [theme.breakpoints.down(450)]: {
      width: 300,
    },

    // For Ipad
    [theme.breakpoints.between(600, 1000)]: {
      width: 450,
    },

    // For 1366*768
    width: 775,
  },
}));
