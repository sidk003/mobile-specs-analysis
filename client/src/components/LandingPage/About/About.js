import React, { useContext, useEffect } from "react";
import { Grid, Paper, Typography, Divider, Box } from "@material-ui/core";
import { Carousel } from "../Carousel/Carousel";
import { GlobalContext } from "../../../context/GlobalState";
import useStyles from "./Styles";

export const About = ({ drawerOpen }) => {
  const classes = useStyles();
  const { about, getAbout } = useContext(GlobalContext);

  useEffect(() => {
    getAbout();
    // below code to avoid warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var title = "";
  var content = "";
  var imageLinks = "";

  if (about !== undefined) {
    title = about.title;
    content = about.content;
    imageLinks = about.links;
  }

  return (
    <Box>
      <Grid className={classes.parent}>
        <Carousel imageLinks={imageLinks} drawerOpen={drawerOpen} />
      </Grid>
      <Box className={classes.wrapper}>
        <Paper className={classes.paper}>
          <div className={classes.header}>
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
          </div>
          <Divider />
          <div className={classes.section}>
            <Typography variant="body1" gutterBottom>
              {content}
            </Typography>
          </div>
        </Paper>
      </Box>
    </Box>
  );
};
