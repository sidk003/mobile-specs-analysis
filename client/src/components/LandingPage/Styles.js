import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  "@global": {
    //Scrollbar which hides when inactive, thinner, rounded corners
    "*::-webkit-scrollbar": {
      width: "0.80em",
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
    // below line to fix scrollbar at the cost of scroll to top
    // overflowX: "hidden",
  },
  scrollToTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    // media queries to be added
    marginLeft: 10,
    // backgroundImage: (props) => (props.darkTheme ? bgImageDark : bgImageLight),
    // backgroundImage: bgImageDark,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));
