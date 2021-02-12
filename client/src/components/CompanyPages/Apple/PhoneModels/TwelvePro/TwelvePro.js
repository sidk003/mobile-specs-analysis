// import React from "react";
// import { Typography } from "@material-ui/core";
// import { Carousel } from "./Carousel/Carousel";
// import useStyles from "./Styles";

// export const TwelvePro = ({ twelveproContent }) => {
//   const classes = useStyles();

//   var title = "";
//   var imageLinks = "";

//   if (twelveproContent !== undefined) {
//     title = twelveproContent.title;
//     imageLinks = twelveproContent.carousel;
//   }

//   return (
//     <div id="TwelvePro">
//       <Typography className={classes.title}>{title}</Typography>
//       <Carousel imageLinks={imageLinks} />
//     </div>
//   );
// };
import React, { forwardRef } from "react";
import { Typography } from "@material-ui/core";
import { Carousel } from "./Carousel/Carousel";
import useStyles from "./Styles";

const TwelvePro = (props, ref) => {
  const classes = useStyles();

  const twelveproContent = props.twelveproContent;

  var title = "";
  var imageLinks = "";

  if (twelveproContent !== undefined) {
    title = twelveproContent.title;
    imageLinks = twelveproContent.carousel;
  }

  return (
    <div ref={ref}>
      <Typography className={classes.title}>{title}</Typography>
      <Carousel imageLinks={imageLinks} />
    </div>
  );
};

export default forwardRef(TwelvePro);
