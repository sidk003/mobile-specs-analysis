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
  // console.log("Specs from specs: ", typeof rows);

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
