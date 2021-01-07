import React, { useContext, useEffect } from "react";
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import Carousel from "../Carousel/Carousel";
import EditContent from "../EditContent";
import { GlobalContext } from "../../../context/GlobalState";
import useStyles from "./Styles";

export const About = () => {
  const classes = useStyles();
  const { about, getAbout } = useContext(GlobalContext);

  useEffect(() => {
    getAbout();
    // below code to avoid warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const title = about.map((data) => data.title);
  const content = about.map((data) => data.content);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Carousel />
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <div className={classes.header}>
            <div className={classes.popover}>
              <EditContent />
            </div>
            <Typography variant="h4" gutterBottom>
              {title[title.length - 1]}
            </Typography>
          </div>

          <Divider />
          <div className={classes.section}>
            <Typography variant="body1" gutterBottom>
              {content[content.length - 1]}
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};
