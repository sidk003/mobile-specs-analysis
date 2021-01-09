import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { GlobalContext } from "../../context/GlobalState";
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
  const { about } = useContext(GlobalContext);
  var companyName = ["Apple"];
  if (about.length !== 0) {
    companyName = about.sidebarCompany;
  }

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

      <ListItem button component={Link} to={"/xiaomi"}>
        <ListItemIcon>
          <img src={XiaomiLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary={companyName.sixth} />
      </ListItem>
    </div>
  );
};
