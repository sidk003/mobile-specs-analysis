import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { Chart } from "./Chart";
import useStyles from "./Styles";

export const Bargraph = ({ bargraph }) => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.barGraph}>
      <CardContent>
        <Chart bargraph={bargraph} />
      </CardContent>
    </Card>
  );
};
