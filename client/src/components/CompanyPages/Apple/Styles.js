import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paperLeft: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "hiddden",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: -190,
    marginRight: 60,
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
  verticalCard: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "hiddden",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: -286,
    marginLeft: 750,
  },
  dimesions: {
    height: 640,
    width: 360,
  },
}));
