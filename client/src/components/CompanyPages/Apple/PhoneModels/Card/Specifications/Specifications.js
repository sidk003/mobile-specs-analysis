import React from "react";
import { Table, TableBody, TableContainer, Paper } from "@material-ui/core";
import { Row } from "./Row";

export const Specifications = ({ specs }) => {
  const createData = (name, specification) => {
    return {
      name,
      spec: specification,
    };
  };

  const rows = [
    createData("GENERAL", specs.general),
    createData("DISPLAY", specs.display),
    createData("HARDWARE", specs.hardware),
    createData("CAMERA", specs.camera),
    createData("CONNECTIVITY", specs.connectivity),
    createData("SENSORS", specs.sensors),
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {rows.map((row) => (
            <Row row={row} key={Math.random().toString(36).substr(2, 9)} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
