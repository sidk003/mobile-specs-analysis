import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { Typography, Divider } from "@material-ui/core";
import { AppleCarousel } from "./Carousel/AppleCarousel";
import { Stockgraph } from "./StockGraph/StockGraph";
import { PhoneTable } from "./Table/Table";
import { Bargraph } from "./BarGraph/Bargraph";
import { TwelveProMax } from "./PhoneModels/TwelveProMax/TwelveProMax";
import useStyles from "./Styles";

export const Apple = ({ darkState }) => {
  const classes = useStyles();

  const { apple, getApple } = useContext(GlobalContext);

  useEffect(() => {
    getApple();
    // below code to avoid warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var companyName = "";
  var tagline = "";
  var imageLinks = "";
  var table = "";
  var stockData = "";
  var bargraph = "";

  if (apple !== undefined && apple.stockData !== undefined) {
    companyName = apple.title;
    tagline = apple.tagline;
    imageLinks = apple.links;
    table = apple.table;
    stockData = apple.stockData;
    bargraph = apple.bargraph;
  }

  return (
    <div className={classes.content}>
      <Typography variant="h2">{companyName}</Typography>
      <Typography variant="h6" color="textSecondary">
        {tagline}
      </Typography>
      <AppleCarousel imageLinks={imageLinks} />
      <Stockgraph stockData={stockData} darkState={darkState} />
      <Bargraph bargraph={bargraph} darkState={darkState} />
      <PhoneTable table={table} />
      <Divider className={classes.divider} />
      <Typography className={classes.header}>iPhone Releases</Typography>
      <Divider className={classes.divider} />
      <TwelveProMax />
    </div>
  );
};
