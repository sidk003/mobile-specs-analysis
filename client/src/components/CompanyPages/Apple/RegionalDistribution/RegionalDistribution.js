import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { Chart } from "./Chart";
import useStyles from "./Styles";

export const RegionalDistribution = ({ doughnutchart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Chart doughnutchart={doughnutchart} />
      </CardContent>
    </Card>
  );
};
