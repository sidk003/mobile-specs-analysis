import React, { useState } from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import PhonelinkSetupIcon from "@material-ui/icons/PhonelinkSetup";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import MemoryIcon from "@material-ui/icons/Memory";
import NetworkCellIcon from "@material-ui/icons/NetworkCell";
import ExploreIcon from "@material-ui/icons/Explore";
import useStyles from "./Styles";

export const Row = ({ row }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const components = {
    GENERAL: PhonelinkSetupIcon,
    DISPLAY: AspectRatioIcon,
    CAMERA: CameraAltIcon,
    HARDWARE: MemoryIcon,
    CONNECTIVITY: NetworkCellIcon,
    SENSORS: ExploreIcon,
  };
  const IconComponent = components[row.name];

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell className={classes.specification}>
          <IconComponent className={classes.icon} />
          {row.name}
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <TableRow key={row.date}>
                    <TableCell component="th" scope="row">
                      Dimensions
                    </TableCell>
                    <TableCell align="left">{row.specs}</TableCell>
                  </TableRow>
                  <TableRow key={row.date}>
                    <TableCell component="th" scope="row">
                      Weight
                    </TableCell>
                    <TableCell align="left">{row.specs}</TableCell>
                  </TableRow>
                  <TableRow key={row.date}>
                    <TableCell component="th" scope="row">
                      IP Rating
                    </TableCell>
                    <TableCell align="left">{row.specs}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
