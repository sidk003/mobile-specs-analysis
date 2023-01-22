import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PhoneAndroid from "@material-ui/icons/PhoneAndroid";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

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

export const secondaryList = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PhoneIphoneIcon />
      </ListItemIcon>
      <ListItemText primary="Apple" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PhoneAndroid />
      </ListItemIcon>
      <ListItemText primary="Google" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <PhoneAndroid />
      </ListItemIcon>
      <ListItemText primary="One-Plus" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PhoneAndroid />
      </ListItemIcon>
      <ListItemText primary="Samsung" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PhoneAndroid />
      </ListItemIcon>
      <ListItemText primary="Xiaomi" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PhoneAndroid />
      </ListItemIcon>
      <ListItemText primary="Huawei" />
    </ListItem>
  </div>
);
