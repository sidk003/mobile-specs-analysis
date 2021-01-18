import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
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

  const { apple, getApple } = useContext(GlobalContext);

  useEffect(() => {
    getApple();
    // below code to avoid warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log("data received: ", apple);

  var companyName = "";
  var tagline = "";
  var imageLinks = "";
  var minicard1 = "";
  var minicard2 = "";
  var doughnutchart = "";
  var table = "";

  if (apple !== undefined) {
    companyName = apple.title;
    tagline = apple.tagline;
    imageLinks = apple.links;
    minicard1 = apple.minicard1;
    minicard2 = apple.minicard2;
    doughnutchart = apple.doughnutchart;
    table = apple.table;
  }

  return (
    <div className={classes.content}>
      <Typography variant="h2">{companyName}</Typography>
      <Typography variant="h6" color="textSecondary">
        {tagline}
      </Typography>
      <AppleCarousel imageLinks={imageLinks} />
      <Stockgraph />
      <LatestPhone minicard1={minicard1} />
      <Minicard minicard2={minicard2} />
      <RegionalDistribution doughnutchart={doughnutchart} />
      <PhoneTable table={table} />
    </div>
  );
};
