import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Divider,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Specifications } from "./Specifications/Specifications";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import EventIcon from "@material-ui/icons/Event";
import useStyles from "./Styles";

export const CardComponent = ({ content }) => {
  const classes = useStyles();
  const twelvepromaxContent = content.twelvepromaxContent;
  const twelveproContent = content.twelveproContent;

  var title = "";
  var image = "";
  var price = "";
  var date = "";
  var specs = content.specs;

  if (twelvepromaxContent !== undefined) {
    title = twelvepromaxContent.title;
    image = twelvepromaxContent.image;
    price = twelvepromaxContent.price;
    date = twelvepromaxContent.date;
  } else if (twelveproContent !== undefined) {
    title = twelveproContent.title;
    image = twelveproContent.image;
    price = twelveproContent.price;
    date = twelveproContent.date;
  }
  // console.log("Specs: ", specs);

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.heading}>{title}</Typography>
          <IconButton>
            {/* can add prices of different variants and different currencies*/}
            <MonetizationOnIcon />
            <Typography className={classes.subheading}>
              Starting Price: {price}
            </Typography>
          </IconButton>{" "}
          <IconButton>
            <EventIcon />
            <Typography className={classes.subheading}>
              Release Date : {date}
            </Typography>
          </IconButton>
          <Divider className={classes.divider} light />
          <Specifications specs={specs} />
        </CardContent>
      </Card>
    </div>
  );
};
