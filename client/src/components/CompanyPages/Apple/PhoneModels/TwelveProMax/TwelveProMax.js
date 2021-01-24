import React from "react";
import { Typography } from "@material-ui/core";
import { Carousel } from "./Carousel/Carousel";
import useStyles from "./Styles";

export const TwelveProMax = ({ twelvepromaxContent }) => {
  const classes = useStyles();

  var title = "";
  var imageLinks = "";

  if (twelvepromaxContent !== undefined) {
    title = twelvepromaxContent.title;
    imageLinks = twelvepromaxContent.carousel;
  }

  return (
    <>
      <Typography className={classes.title}>{title}</Typography>
      <Carousel imageLinks={imageLinks} />
    </>
  );
};
