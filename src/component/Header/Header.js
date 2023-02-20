import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://www.vectorlogo.zone/logos/gmail/gmail-ar21.png"
          alt=""
        />
      </div>

      <div className="header__middle">
        <SearchIcon className="header__serchIcon" />
        <input placeholder="Search mail" type="text" />
        <ArrowDownwardIcon className="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>

        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
