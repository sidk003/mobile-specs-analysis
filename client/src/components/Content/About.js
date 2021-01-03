import React from "react";
import {
  Grid,
  Paper,
  makeStyles,
  Typography,
  Divider,
} from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "hiddden",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12} xl={12}>
        <Carousel />
      </Grid>
      <Grid item xs={12} md={12} lg={12} xl={12}>
        <Paper className={classes.paper}>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Divider />
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
