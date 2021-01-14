import React from "react";
import { Typography } from "@material-ui/core";
import { AppleCarousel } from "./Carousel/AppleCarousel";
import { Stockgraph } from "./StockGraph/StockGraph";
import { LatestPhone } from "./LatestPhone/LatestPhone";
import { Minicard } from "./Minicard/Minicard";
import { RegionalDistribution } from "./RegionalDistribution/RegionalDistribution";
import { PhoneTable } from "./Table/Table";
import useStyles from "./Styles";

export const Apple = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Typography variant="h2">Apple</Typography>
      <Typography variant="h6" color="textSecondary">
        Think Different.
      </Typography>
      <AppleCarousel />
      <Stockgraph />
      <LatestPhone />
      <Minicard />
      <RegionalDistribution />
      <PhoneTable />
    </div>
  );
};
