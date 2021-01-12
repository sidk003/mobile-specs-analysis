import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  heading: {
    marginLeft: "-6vw",
  },

  paperLeft: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "hiddden",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: "-4vw",
  },
  section: {
    margin: theme.spacing(2),
  },
  header: {
    marginLeft: 15,
  },
  verticalCarousel: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "hiddden",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: -595,
    marginLeft: "45vw",
  },
}));
