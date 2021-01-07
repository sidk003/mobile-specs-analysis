import React from "react";
import { Typography, Link } from "@material-ui/core";

export default function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/sidk003">
        Siddhant
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
