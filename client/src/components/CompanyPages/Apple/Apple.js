import React, { useEffect, useContext, useRef } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { Typography, Divider, Box, CircularProgress } from "@material-ui/core";
import { AppleCarousel } from "./Carousel/AppleCarousel";
import { Stockgraph } from "./StockGraph/StockGraph";
import { PhoneTable } from "./Table/Table";
import { Bargraph } from "./BarGraph/Bargraph";
import useStyles from "./Styles";
import PhoneModels from "./PhoneModels/PhoneModels";

export const Apple = ({ darkState, drawerOpen }) => {
  var LeftMarginIpad = drawerOpen ? 15 : 90;
  var LeftMarginHD = !drawerOpen ? 80 : 0;
  var LeftMarginFHD = !drawerOpen ? 70 : 80;

  const classes = useStyles({
    LeftMarginIpad: LeftMarginIpad,
    LeftMarginHD: LeftMarginHD,
    LeftMarginFHD: LeftMarginFHD,
  });

  const twelveProMaxRef = useRef(null);
  const twelveProRef = useRef(null);
  const eightPlusRef = useRef(null);
  const iphoneXRef = useRef(null);

  const { apple, getApple } = useContext(GlobalContext);

  useEffect(() => {
    getApple();
    // below code to avoid warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const GetComponentName = (name) => {
    if (name === "iPhone 12 Pro Max") {
      twelveProMaxRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    } else if (name === "iPhone 12 Pro") {
      twelveProRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    } else if (name === "iPhone 8 Plus") {
      eightPlusRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    } else if (name === "iPhone X") {
      iphoneXRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  var companyName = "";
  var tagline = "";
  var imageLinks = "";
  var stockData = "";
  var bargraph = "";
  var table = "";
  var twelvepromaxContent = "";
  var twelveproContent = "";
  var eightplusContent = "";
  var iphoneXContent = "";

  if (apple !== undefined && apple.stockData !== undefined) {
    companyName = apple.title;
    tagline = apple.tagline;
    imageLinks = apple.links;
    stockData = apple.stockData;
    bargraph = apple.bargraph;
    table = apple.table;
    twelvepromaxContent = apple.phonemodels.twelvepromax;
    twelveproContent = apple.phonemodels.twelvepro;
    eightplusContent = apple.phonemodels.eightplus;
    iphoneXContent = apple.phonemodels.iphonex;
  }

  return (
    <Box className={classes.content}>
      <Box className={classes.analytics}>
        <Typography variant="h2">{companyName}</Typography>
        <Typography variant="h6" color="textSecondary">
          {tagline}
        </Typography>
        {imageLinks ? (
          <AppleCarousel imageLinks={imageLinks} />
        ) : (
          <CircularProgress />
        )}
        <Stockgraph stockData={stockData} darkState={darkState} />
        <Bargraph darkState={darkState} bargraph={bargraph} />
      </Box>
      <PhoneTable table={table} GetComponentName={GetComponentName} />
      <Divider className={classes.divider} />
      <Typography className={classes.header}>iPhone Releases</Typography>
      <Divider className={classes.divider} />
      <PhoneModels
        twelvepromaxContent={twelvepromaxContent}
        ref={twelveProMaxRef}
      />
      <PhoneModels twelveproContent={twelveproContent} ref={twelveProRef} />
      <PhoneModels iphoneXContent={iphoneXContent} ref={iphoneXRef} />
      <PhoneModels eightplusContent={eightplusContent} ref={eightPlusRef} />
    </Box>
  );
};
