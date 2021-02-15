import React, { forwardRef } from "react";
import { CardComponent } from "./Card/Card";
import useStyles from "./Styles";

const PhoneModels = (props, ref) => {
  const classes = useStyles();
  return (
    <div ref={ref}>
      <CardComponent className={classes.title} content={props} />
    </div>
  );
};

export default forwardRef(PhoneModels);
