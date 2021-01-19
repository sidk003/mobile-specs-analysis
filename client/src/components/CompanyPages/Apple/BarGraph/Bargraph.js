import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { Chart } from "./Chart";
import useStyles from "./Styles";

export const Bargraph = () => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.barGraph}>
      <CardContent>
        <Chart />
      </CardContent>
    </Card>
  );
};
