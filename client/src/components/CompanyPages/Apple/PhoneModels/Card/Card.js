import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Divider,
  Typography,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import { Specifications } from "./Specifications/Specifications";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import EventIcon from "@material-ui/icons/Event";
import useStyles from "./Styles";

export const CardComponent = ({ content }) => {
  const classes = useStyles();
  const twelvepromaxContent = content.twelvepromaxContent;
  const twelveproContent = content.twelveproContent;
  const eightplusContent = content.eightplusContent;
  const iphoneXContent = content.iphoneXContent;

  var title = "";
  var image = "";
  var price = "";
  var date = "";
  var specs = "";

  if (
    twelvepromaxContent !== undefined &&
    twelvepromaxContent.specs !== undefined
  ) {
    title = twelvepromaxContent.title;
    image = twelvepromaxContent.image;
    price = twelvepromaxContent.price;
    date = twelvepromaxContent.date;
    specs = twelvepromaxContent.specs;
  } else if (
    twelveproContent !== undefined &&
    twelveproContent.specs !== undefined
  ) {
    title = twelveproContent.title;
    image = twelveproContent.image;
    price = twelveproContent.price;
    date = twelveproContent.date;
    specs = twelveproContent.specs;
  } else if (
    eightplusContent !== undefined &&
    eightplusContent.specs !== undefined
  ) {
    title = eightplusContent.title;
    image = eightplusContent.image;
    price = eightplusContent.price;
    date = eightplusContent.date;
    specs = eightplusContent.specs;
  } else if (
    iphoneXContent !== undefined &&
    iphoneXContent.specs !== undefined
  ) {
    title = iphoneXContent.title;
    image = iphoneXContent.image;
    price = iphoneXContent.price;
    date = iphoneXContent.date;
    specs = iphoneXContent.specs;
  }

  return (
    <div>
      <Card className={classes.card}>
        {image ? (
          <CardMedia
            className={classes.media}
            alt="Mobile image"
            image={image}
          />
        ) : (
          <CircularProgress />
        )}
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
