import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.95em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "-5px 0px 13px -4px rgba(0,0,0,0.75)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(96, 92, 97, 0.57)",
    },
  },

  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflowX: "hidden",
    // backgroundImage: (props) => (props.darkTheme ? bgImageDark : bgImageLight),
    // backgroundImage: bgImageDark,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));
