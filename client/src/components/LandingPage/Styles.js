import { makeStyles } from "@material-ui/core/styles";

const bgImageLight = `url(${"https://www.wallpapertip.com/wmimgs/94-948582_light-colorful-background-hd.jpg"})`;
const bgImageDark = `url(${"https://cdn.wallpapersafari.com/69/10/CEokAi.jpg"})`;

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
