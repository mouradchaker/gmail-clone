import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import { useGlobalContext } from "../context";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

function Header() {
  const { openSidebar, closeSidebar } = useGlobalContext();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton onClick={openSidebar}>
          <MenuIcon className="header__menu" />
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
        <Avatar src={user?.photoUrl} />

        <IconButton onClick={signOut}>
          <LogoutIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
