import React, { useContext, useEffect } from "react";
import {
  Grid,
  Paper,
  makeStyles,
  Typography,
  Divider,
} from "@material-ui/core";
import Carousel from "./Carousel";
import EditContent from "./EditContent";
import { GlobalContext } from "../../context/GlobalState";

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
  popover: {
    direction: "rtl",
  },
}));

export const About = () => {
  const classes = useStyles();
  const { about, getAbout } = useContext(GlobalContext);

  useEffect(() => {
    getAbout();
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
