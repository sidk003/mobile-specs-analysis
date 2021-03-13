import React, { useState } from "react";
import { Zoom } from "@material-ui/core";
import useStyles from "./Styles";

export const BackToTop = ({ children }) => {
  const classes = useStyles();
  const [trigger, setTrigger] = useState(false);

  window.onscroll = () => {
    if (document.documentElement.scrollTop > 300) {
      setTrigger(true);
    } else {
      setTrigger(false);
    }
  };

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
      // window.scrollTo({ top: 0, left: -100, behavior: "smooth" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.buttonStyle}
      >
        {children}
      </div>
    </Zoom>
  );
};
