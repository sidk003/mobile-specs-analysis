import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "hiddden",
    flexDirection: "column",
    justifyContent: "center",
  },
  fixedHeight: {
    height: 430,
  },
}));

export default function About() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    // <Carousel />
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12} xl={12}>
        {/* <Paper className={fixedHeightPaper}> */}
        <Carousel />
        {/* </Paper>   */}
      </Grid>
    </Grid>
  );
}
