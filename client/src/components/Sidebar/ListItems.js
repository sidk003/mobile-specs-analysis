import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AppleLogo from "../../Images/apple.png";
import GoogleLogo from "../../Images/google.png";
import OnePlusLogo from "../../Images/oneplus.png";
import SamsungLogo from "../../Images/samsung.png";
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

export const companyList = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <img src={AppleLogo} />
      </ListItemIcon>
      <ListItemText primary="Apple" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <img src={GoogleLogo} />
      </ListItemIcon>
      <ListItemText primary="Google" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <img src={OnePlusLogo} />
      </ListItemIcon>
      <ListItemText primary="One-Plus" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <img src={SamsungLogo} />
      </ListItemIcon>
      <ListItemText primary="Samsung" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <img src={XiaomiLogo} />
      </ListItemIcon>
      <ListItemText primary="Xiaomi" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <img src={HuaweiLogo} />
      </ListItemIcon>
      <ListItemText primary="Huawei" />
    </ListItem>
  </div>
);
