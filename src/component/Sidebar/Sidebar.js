import { Button, IconButton } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "../SidebarOption/SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import { useGlobalContext } from "../context";

function Sidebar() {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <div
      className={`sidebar-all
      ${isSidebarOpen ? "sidebar show_sidebar " : "show_sidebar"}`}
    >
      <Button startIcon={<AddIcon />} className="sidebar__compose">
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={32} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={25} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={19} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={29} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={30} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={32} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>

          <IconButton>
            <DuoIcon />
          </IconButton>

          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
