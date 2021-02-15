import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
} from "@material-ui/core";
import { Row } from "./Row";

export const Specifications = ({ specs }) => {
  const createData = (name) => {
    return {
      name,
      specs: specs,
    };
  };

  const rows = [
    createData("GENERAL"),
    createData("DISPLAY"),
    createData("HARDWARE"),
    createData("CAMERA"),
    createData("CONNECTIVITY"),
    createData("SENSORS"),
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>Full Specifications</TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
