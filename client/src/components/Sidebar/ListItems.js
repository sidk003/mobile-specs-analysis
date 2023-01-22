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

export const MainList = ({ setOpen, setDrawerOpen }) => {
  const closeDrawer = () => {
    setDrawerOpen(false);
    setOpen(false);
  };
  return (
    <div>
      <ListItem button component={Link} to={"/"} onClick={closeDrawer}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="About-us" />
      </ListItem>
    </div>
  );
};

export const ListItems = ({ setOpen, setDrawerOpen }) => {
  const closeDrawer = () => {
    setDrawerOpen(false);
    setOpen(false);
  };

  return (
    <div>
      <ListItem button component={Link} to={"/apple"} onClick={closeDrawer}>
        <ListItemIcon>
          <img src={AppleLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary="Apple" />
      </ListItem>

      <ListItem button component={Link} to={"/google"} onClick={closeDrawer}>
        <ListItemIcon>
          <img src={GoogleLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary="Google" />
      </ListItem>

      <ListItem button component={Link} to={"/huawei"} onClick={closeDrawer}>
        <ListItemIcon>
          <img src={HuaweiLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary="Huawei" />
      </ListItem>

      <ListItem button component={Link} to={"/oneplus"} onClick={closeDrawer}>
        <ListItemIcon>
          <img src={OnePlusLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary="One-Plus" />
      </ListItem>

      <ListItem button component={Link} to={"/samsung"} onClick={closeDrawer}>
        <ListItemIcon>
          <img src={SamsungLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary="Samsung" />
      </ListItem>

      <ListItem button component={Link} to={"/xiaomi"} onClick={closeDrawer}>
        <ListItemIcon>
          <img src={XiaomiLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary="Xiaomi" />
      </ListItem>
    </div>
  );
};
