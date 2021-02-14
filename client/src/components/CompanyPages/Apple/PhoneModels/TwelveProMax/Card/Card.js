import React from "react";
import {
  Avatar,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";
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
          <Typography
            className={"MuiTypography--heading"}
            variant={"h4"}
            gutterBottom
          >
            {name}
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            Starting Price:
          </Typography>
          <br />
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            Release Date :
          </Typography>

          <Divider className={classes.divider} light />
        </CardContent>
      </Card>
    </div>
  );
};
