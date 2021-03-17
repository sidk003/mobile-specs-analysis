import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  dimesions: {
    // For Ipad
    [theme.breakpoints.up(600) && theme.breakpoints.down(1000)]: {
      // maintaining 9:16 ratio
      height: 253,
      width: 450,
    },

    // For 1366*768
    height: 360,
    width: 640,
  },
  position: {
    // For iPads (768*1024)
    [theme.breakpoints.up(600) && theme.breakpoints.down(1000)]: {
      marginLeft: (props) => props.LeftMarginIpad,
    },

    // For 1366*768
    marginLeft: (props) => props.LeftMarginHD,

    // For biggest screen sizes (1920*1080)
    [theme.breakpoints.up(1367)]: {
      marginLeft: (props) => props.LeftMarginFHD,
    },
    marginTop: -50,
  },
  slickSlider: {
    // For Ipad
    [theme.breakpoints.up(600) && theme.breakpoints.down(1000)]: {
      width: 450,
    },

    // For 1366*768
    width: 775,
  },
}));
