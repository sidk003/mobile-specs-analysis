import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  wrapper: {
    // media queries to be added

    // For Ipads
    [theme.breakpoints.up(600) && theme.breakpoints.down(1100)]: {
      marginLeft: 10,
      marginRight: 20,
    },
    marginLeft: 100,
    marginRight: 90,
  },
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
}));
