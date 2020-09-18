import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeoplelIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import Storefront from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7H0CstjO_tIC35Q9RKvdqe7R1XZvaKfEgrA&usqp=CAU"
        title="wheein"
      />
      <SidebarRow Icon={LocalHospitalIcon} title="Covid-19" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeoplelIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
