import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "hiddden",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 20,
  },
  section: {
    margin: theme.spacing(2),
  },
  header: {
    marginLeft: 15,
  },
  popover: {
    direction: "rtl",
  },
}));
