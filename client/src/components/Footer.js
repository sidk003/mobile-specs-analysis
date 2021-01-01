import React from "react";
import { Typography, Link } from "@material-ui/core";

export default function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Siddhant
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
