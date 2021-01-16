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

  var companyName = "";
  var tagline = "";
  var imageLinks = "";

  if (apple !== undefined) {
    companyName = apple.title;
    tagline = apple.tagline;
    imageLinks = apple.links;
  }

  return (
    <div className={classes.content}>
      <Typography variant="h2">{companyName}</Typography>
      <Typography variant="h6" color="textSecondary">
        {tagline}
      </Typography>
      <AppleCarousel imageLinks={imageLinks} />
      <Stockgraph />
      <LatestPhone />
      <Minicard />
      <RegionalDistribution />
      <PhoneTable />
    </div>
  );
};
