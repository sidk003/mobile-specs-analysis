import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PhoneAndroid from "@material-ui/icons/PhoneAndroid";

export const sidebarList = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PhoneAndroid />
      </ListItemIcon>
      <ListItemText primary="Smartphones" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PhoneAndroid />
      </ListItemIcon>
      <ListItemText primary="Smartphones 2" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PhoneAndroid />
      </ListItemIcon>
      <ListItemText primary="Smartphones 3" />
    </ListItem>
  </div>
);
