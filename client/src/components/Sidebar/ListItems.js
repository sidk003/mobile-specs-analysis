import React from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AppleLogo from "../../Images/apple2.png";
import GoogleLogo from "../../Images/google.png";
import OnePlusLogo from "../../Images/oneplus.png";
import SamsungLogo from "../../Images/samsung.png";
import HuaweiLogo from "../../Images/huawei.png";
import XiaomiLogo from "../../Images/xiaomi.png";

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
  return (
    <div>
      <ListItem button component={Link} to={"/apple"}>
        <ListItemIcon>
          <img src={AppleLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary="Apple" />
      </ListItem>

      <ListItem button component={Link} to={"/google"}>
        <ListItemIcon>
          <img src={GoogleLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary="Google" />
      </ListItem>

      <ListItem button component={Link} to={"/huawei"}>
        <ListItemIcon>
          <img src={HuaweiLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary="Huawei" />
      </ListItem>

      <ListItem button component={Link} to={"/oneplus"}>
        <ListItemIcon>
          <img src={OnePlusLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary="One-Plus" />
      </ListItem>

      <ListItem button component={Link} to={"/samsung"}>
        <ListItemIcon>
          <img src={SamsungLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary="Samsung" />
      </ListItem>

      <ListItem button component={Link} to={"/xiaomi"}>
        <ListItemIcon>
          <img src={XiaomiLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary="Xiaomi" />
      </ListItem>
    </div>
  );
};
