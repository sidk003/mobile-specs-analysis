import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import useStyles from "./Styles";

export const Minicard = ({ minicard2 }) => {
  const classes = useStyles();

  var title = "";
  var content = "";

  if (minicard2 !== undefined) {
    title = minicard2.title;
    content = minicard2.content;
  }

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          {title}
        </Typography>
        <Typography variant="h4" component="h2">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};
