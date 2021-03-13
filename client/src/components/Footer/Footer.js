import React from "react";
import { Typography, Link } from "@material-ui/core";

export const Footer = () => {
  const handleClick = () => {
    window.open("https://github.com/sidk003");
  };

  return (
    <>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" onClick={handleClick}>
          Siddhant
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
};
