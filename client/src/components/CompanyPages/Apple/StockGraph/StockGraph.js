import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Styles";

export const Stockgraph = () => {
  const classes = useStyles();

  return (
    <Card className={classes.stockGraph} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Apple Stock Prices
        </Typography>
        <Typography variant="h5" component="h2">
          Graph in here
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More Details</Button>
      </CardActions>
    </Card>
  );
};
