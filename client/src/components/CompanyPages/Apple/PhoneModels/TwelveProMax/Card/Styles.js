import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    maxWidth: 900,
    marginTop: 50,
    marginBottom: 100,
    marginLeft: 100,
    // transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    paddingTop: "56.25%",
  },
  content: {
    textAlign: "left",
    padding: theme.spacing.unit * 3,
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    marginLeft: 5,
    fontSize: 14,
    // color: theme.palette.secondary.main,
  },
  heading: {
    fontSize: 36,
    marginLeft: 15,
    fontFamily: "serif  ",
  },
}));
