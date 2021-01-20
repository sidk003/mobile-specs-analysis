import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { Chart } from "./Chart";
import useStyles from "./Styles";

export const Stockgraph = ({ stockData, darkState }) => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.stockGraph}>
      <CardContent>
        <Chart stockData={stockData} darkState={darkState} />
      </CardContent>
    </Card>
  );
};
