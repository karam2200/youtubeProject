import React from "react";
import "./SideNavbar.css";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ContentCutIcon from '@mui/icons-material/ContentCut';
const SideNavbar = ({sideNavbar}) => {
  return (
    <div className={sideNavbar?"home-sideNavbar":"homeSideNavbarHide"}>
      <div className="home_sideNavbarTop">
        <div className="home_sideNavbarTopOption">
          <HomeIcon />
          <div className="home_sideNavbarTopOptionTitle">Home</div>
        </div>

        <div className="home_sideNavbarTopOption">
          <VideocamIcon />
          <div className="home_sideNavbarTopOptionTitle">Shorts</div>
        </div>

        <div className="home_sideNavbarTopOption">
          <SubscriptionsIcon />
          <div className="home_sideNavbarTopOptionTitle">Subscription</div>
        </div>
      </div>

      <div className="home_sideNavbarMiddle">
        <div className="home_sideNavbarTopOption">
          <div className="home_sideNavbarTopOptionTitle">You</div>
          <ChevronRightIcon />
        </div>

        <div className="home_sideNavbarTopOption">
          <RecentActorsIcon />
          <div className="home_sideNavbarTopOptionTitle">Your channel</div>
        </div>

        <div className="home_sideNavbarTopOption">
          <HistoryIcon />
          <div className="home_sideNavbarTopOptionTitle">History</div>
        </div>

        <div className="home_sideNavbarTopOption">
          <PlaylistAddIcon />
          <div className="home_sideNavbarTopOptionTitle">Playlist</div>
        </div>

        <div className="home_sideNavbarTopOption">
          <SmartDisplayIcon />
          <div className="home_sideNavbarTopOptionTitle">Your videos</div>
        </div>

        <div className="home_sideNavbarTopOption">
          <WatchLaterIcon />
          <div className="home_sideNavbarTopOptionTitle">Watch later</div>
        </div>

        <div className="home_sideNavbarTopOption">
          <ThumbUpAltIcon />
          <div className="home_sideNavbarTopOptionTitle">Liked videos</div>
        </div>

        <div className="home_sideNavbarTopOption">
          <ContentCutIcon />
          <div className="home_sideNavbarTopOptionTitle">Your clips</div>
        </div>
      </div>

      <div className="home_sideNavbarMiddle">
        <div className="home_sideNavbarTopOption">
            <div className="home_sideNavbarTopOptionTitleHeader">Subscription</div>
        </div>

        <div className="home_sideNavbarTopOption">
            <img src="https://play-lh.googleusercontent.com/8t6U6HGuMnP1DAJYpb4U_fEwVA7fgaOBJYRyfPHM5OLZllGj-8tsmJhu6Y4ikMrGpZg" alt="logo" className="home_sideNavbar_ImgLogo" />
            <div className="home_sideNavbarTopOptionTitle">Internshala</div>
        </div>

        <div className="home_sideNavbarTopOption">
            <img src="https://wallpapercave.com/wp/wp7331033.jpg" alt="logo" className="home_sideNavbar_ImgLogo" />
            <div className="home_sideNavbarTopOptionTitle">Mr Beast</div>
        </div>

        <div className="home_sideNavbarTopOption">
            <img src="https://www.ncnonline.net/wp-content/uploads/2020/08/1594623087_pG90ZY_Coding_Ninjas-777x420.jpg" alt="logo" className="home_sideNavbar_ImgLogo" />
            <div className="home_sideNavbarTopOptionTitle">Coding Ninjas</div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
