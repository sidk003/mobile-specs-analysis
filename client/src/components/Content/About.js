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

export default function About() {
  const classes = useStyles();
  // const aboutContent = useSelector((state) => state.about);
  // console.log(aboutContent);
  const { about } = useContext(GlobalContext);

  // useEffect(() => {
  //   getAbout();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
              {/* About Us */}
              {about[0]}
            </Typography>
          </div>

          <Divider />
          <div className={classes.section}>
            <Typography variant="body1" gutterBottom>
              {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam. */}
              {about[1]}
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}
