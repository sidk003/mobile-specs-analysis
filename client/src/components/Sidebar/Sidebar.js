import React from "react";
import useStyles from "./Styles";
import { Drawer, List, Divider, IconButton } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainList, companyList } from "../Sidebar/ListItems";
import clsx from "clsx";

export const Sidebar = ({ open, handleDrawerClose }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainList}</List>
      <Divider />
      <List>{companyList}</List>
    </Drawer>
  );
};
