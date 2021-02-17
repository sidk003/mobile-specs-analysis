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
  var rowContent = "";

  if (row.spec !== undefined) {
    rowContent = row.spec;
  }

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
                {rowContent && (
                  <TableBody>
                    {rowContent.map((content) => (
                      <TableRow tabIndex={-1}>
                        <TableCell></TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          padding="none"
                          align="left"
                        >
                          {content.key}
                        </TableCell>
                        <TableCell align="left">{content.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                )}
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
