import React from "react";
import { Typography, Link } from "@material-ui/core";

const handleClick = () => {
  window.open("https://github.com/sidk003");
};

export const Footer = () => {
  return (
    <div>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" onClick={handleClick}>
          Siddhant
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
};
