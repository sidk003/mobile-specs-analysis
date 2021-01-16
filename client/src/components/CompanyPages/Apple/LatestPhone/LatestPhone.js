import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Styles";

export const LatestPhone = ({ minicard1 }) => {
  const classes = useStyles();

  var title = "";
  var content = "";

  if (minicard1 !== undefined) {
    title = minicard1.title;
    content = minicard1.content;
  }

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          {title}
        </Typography>
        <Typography variant="h4" component="h2">
          {content}
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
