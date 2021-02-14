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

export const CardComponent = ({ imageLinks, name }) => {
  const classes = useStyles();

  var image = "";

  if (imageLinks !== undefined) {
    image = imageLinks.image3;
  }

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.heading}>{name}</Typography>
          <IconButton>
            {/* can add prices of different variants and different currencies*/}
            <MonetizationOnIcon />
            <Typography className={classes.subheading}>
              Starting Price: $1099
            </Typography>
          </IconButton>{" "}
          <IconButton>
            <EventIcon />
            <Typography className={classes.subheading}>
              Release Date : 24-Feb-2020
            </Typography>
          </IconButton>
          <Divider className={classes.divider} light />
          <Specifications />
        </CardContent>
      </Card>
    </div>
  );
};
