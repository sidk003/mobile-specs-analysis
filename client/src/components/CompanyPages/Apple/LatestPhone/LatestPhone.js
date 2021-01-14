import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Styles";

export const LatestPhone = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          Latest Realease:
        </Typography>
        <Typography variant="h4" component="h2">
          iphone 12
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.button}>
          More Details
        </Button>
      </CardActions>
    </Card>
  );
};
