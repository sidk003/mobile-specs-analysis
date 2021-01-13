import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import useStyles from "./Styles";

export const Minicard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          Percent Apple iphones sold among all smartphones sold worldwide:
        </Typography>
        <Typography variant="h4" component="h2">
          13%
        </Typography>
      </CardContent>
    </Card>
  );
};
