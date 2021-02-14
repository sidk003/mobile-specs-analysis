import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
} from "@material-ui/core";
import { Row } from "./Row";

export const Specifications = () => {
  function createData(name) {
    return {
      name,
      specs: [
        { key: "Colours", value: "Gold, Graphite, Pacific Blue, Silver" },
        { key: "Wireless charging", value: "Yes" },
        { key: "Fast charging", value: "Proprietary" },
        { key: "Weight (g)", value: "228.00" },
      ],
    };
  }

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
