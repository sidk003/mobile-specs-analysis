import React, { forwardRef } from "react";
import { Typography } from "@material-ui/core";
import { Carousel } from "./Carousel/Carousel";
import useStyles from "./Styles";

const TwelveProMax = (props, ref) => {
  const classes = useStyles();

  const twelvepromaxContent = props.twelvepromaxContent;

  var title = "";
  var imageLinks = "";

  if (twelvepromaxContent !== undefined) {
    title = twelvepromaxContent.title;
    imageLinks = twelvepromaxContent.carousel;
  }

  return (
    <div ref={ref}>
      <Typography className={classes.title}>{title}</Typography>
      <Carousel imageLinks={imageLinks} />
    </div>
  );
};

export default forwardRef(TwelveProMax);
