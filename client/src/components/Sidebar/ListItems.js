import React, { useContext } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { GlobalContext } from "../../context/GlobalState";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AppleLogo from "../../Images/applepurple.png";
import GoogleLogo from "../../Images/google.png";
import OnePlusLogo from "../../Images/oneplus.png";
import SamsungLogo from "../../Images/samsung48.png";
import HuaweiLogo from "../../Images/huawei.png";
import XiaomiLogo from "../../Images/xiaomi.png";

export const mainList = (
  <div>
    <ListItem button>
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
      <ListItem button>
        <ListItemIcon>
          <img src={AppleLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary={companyName.first} />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <img src={GoogleLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary={companyName.second} />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <img src={HuaweiLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary={companyName.third} />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <img src={OnePlusLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary={companyName.fourth} />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <img src={SamsungLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary={companyName.fifth} />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <img src={XiaomiLogo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary={companyName.sixth} />
      </ListItem>
    </div>
  );
};
