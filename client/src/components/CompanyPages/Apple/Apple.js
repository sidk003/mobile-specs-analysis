import React from "react";
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import { AppleCarousel } from "./Carousel/AppleCarousel";
import { Stockgraph } from "./StockGraph/StockGraph";
import useStyles from "./Styles";

export const Apple = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h2" className={classes.heading}>
        Apple
      </Typography>
      <Typography
        variant="h6"
        color="textSecondary"
        className={classes.heading}
      >
        Think Different.
      </Typography>
      <Stockgraph />
      <Grid item xs={8}>
        <Paper className={classes.paperLeft}>
          <div className={classes.header}>
            <Typography variant="h6" gutterBottom>
              About Apple paragraph
            </Typography>
          </div>

          <Divider />
          <div className={classes.section}>
            <Typography variant="body1" gutterBottom>
              models of apple navigation
            </Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={6} className={classes.verticalCarousel}>
        <AppleCarousel />
      </Grid>
    </div>
  );
};
