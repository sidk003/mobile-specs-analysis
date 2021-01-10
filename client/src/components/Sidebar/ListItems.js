import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import { GlobalContext } from "../../context/GlobalState";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AppleLogo from "../../Images/apple2.png";
import GoogleLogo from "../../Images/google.png";
import OnePlusLogo from "../../Images/oneplus.png";
import SamsungLogo from "../../Images/samsung.png";
import HuaweiLogo from "../../Images/huawei.png";
import XiaomiLogo from "../../Images/xiaomi.png";
import useStyles from "./Styles";

export const mainList = (
  <div>
    <ListItem button component={Link} to={"/"}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="About-us" />
    </ListItem>
  </div>
);

export const ListItems = () => {
  const { about } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  var companyName = ["Apple"];

  if (about.length !== 0) {
    companyName = about.sidebarCompany;
  }

  const handleNestedListToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItem button component={Link} to={"/apple"}>
        <ListItemIcon>
          <img src={AppleLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary={companyName.first} />
      </ListItem>

      <ListItem button component={Link} to={"/google"}>
        <ListItemIcon>
          <img src={GoogleLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary={companyName.second} />
      </ListItem>

      <ListItem button component={Link} to={"/huawei"}>
        <ListItemIcon>
          <img src={HuaweiLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary={companyName.third} />
      </ListItem>

      <ListItem button component={Link} to={"/oneplus"}>
        <ListItemIcon>
          <img src={OnePlusLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary={companyName.fourth} />
      </ListItem>

      <ListItem button component={Link} to={"/samsung"}>
        <ListItemIcon>
          <img src={SamsungLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary={companyName.fifth} />
      </ListItem>

      <ListItem
        button
        component={Link}
        to={"/xiaomi"}
        onClick={handleNestedListToggle}
      >
        <ListItemIcon>
          <img src={XiaomiLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary={companyName.sixth} />
        <Collapse
          in={open}
          transitionDuration="auto"
          unmountOnExit
          className={classes.collapsible}
        >
          <ListItem>Note 10</ListItem>
          <ListItem>Note 11</ListItem>
          <ListItem>Note 12</ListItem>
        </Collapse>
      </ListItem>
    </div>
  );
};
