import React from "react";
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import { AppleCarousel } from "./AppleCarousel";
import useStyles from "./Styles";

export const Apple = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <Paper className={classes.paperLeft}>
            <Typography variant="h4" gutterBottom>
              Tagline of Apple
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={10}>
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
        <Grid item xs={5} className={classes.verticalCard}>
          <AppleCarousel />
        </Grid>
      </Grid>
    </div>
  );
};
