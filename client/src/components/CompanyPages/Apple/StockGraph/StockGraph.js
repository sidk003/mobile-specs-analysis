import React from "react";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import Chart from "./Chart";
import useStyles from "./Styles";

export const Stockgraph = () => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.stockGraph}>
      <CardContent>
        <Chart />
      </CardContent>
    </Card>
  );
};
