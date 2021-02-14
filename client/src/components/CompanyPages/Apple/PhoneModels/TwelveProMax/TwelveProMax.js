import React, { forwardRef } from "react";
import { Typography } from "@material-ui/core";
import { Carousel } from "./Carousel/Carousel";
import { CardComponent } from "./Card/Card";
import useStyles from "./Styles";

const TwelveProMax = (props, ref) => {
  const classes = useStyles();

  const twelvepromaxContent = props.twelvepromaxContent;
  const twelveproContent = props.twelveproContent;

  var title = "";
  var imageLinks = "";

  if (twelvepromaxContent !== undefined) {
    title = twelvepromaxContent.title;
    imageLinks = twelvepromaxContent.carousel;
  } else if (twelveproContent !== undefined) {
    title = twelveproContent.title;
    imageLinks = twelveproContent.carousel;
  }

  return (
    <div ref={ref}>
      <CardComponent
        className={classes.title}
        imageLinks={imageLinks}
        name={title}
      />
    </div>
  );
};

export default forwardRef(TwelveProMax);
