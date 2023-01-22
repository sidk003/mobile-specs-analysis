import React from "react";
import {
  Grid,
  Paper,
  makeStyles,
  Typography,
  Divider,
} from "@material-ui/core";
import Carousel from "./Carousel";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
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

export default function About() {
  const classes = useStyles();
  const aboutContent = useSelector((state) => state.about);
  console.log(aboutContent);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Carousel />
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <div className={classes.header}>
            <Typography variant="h4" gutterBottom>
              About Us
            </Typography>
          </div>
          <Divider />
          <div className={classes.section}>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}
