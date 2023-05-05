import React from "react";
import {
  AiFillHome,
  AiFillLike,
  AiFillPlaySquare,
  AiOutlineHistory,
  AiFillFire,
  AiFillTrophy,
  AiFillSetting,
  AiOutlineFlag,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";
import {
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdSubscriptions,
  MdWatchLater,
} from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import{IoMusicalNoteOutline} from "react-icons/io5"
import{RiFeedbackLine } from "react-icons/ri"
import Home from "../pages/Home";
import Shorts from "../pages/Shorts";
import Subscriptions from "../pages/Subscriptions";

import Sidebarlink from "./Sidebarlink";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const {togglevalue} = useSelector(state=>state.toggle)

  
  return (
    <>
      {togglevalue && <div className="h-[700px] w-[20%] whole flex-col divide-y divide-slate-700  overflow-y-[10%] scroll-smooth ml-3">
        <div className="first flex-col ">
          <Sidebarlink
            titles="Home"
            icons={<AiFillHome size={20} />}
            urls="/Home"
          />
          <Sidebarlink
            titles="Shorts"
            icons={<BsTiktok size={20} />}
            urls="/Shorts"
          />
          <Sidebarlink
            titles="Subscriptions"
            icons={<MdSubscriptions size={20} />}
            urls="/Subscriptions"
          />
        </div>
        <div className="first flex-col">
          <Sidebarlink
            titles="Library"
            icons={<MdOutlineVideoLibrary size={20} />}
            urls="/Library"
          />
          <Sidebarlink
            titles="History"
            icons={<AiOutlineHistory size={20} />}
            urls="/History"
          />
          <Sidebarlink
            titles="Your Videos"
            icons={<AiFillPlaySquare size={20} />}
            urls="/Yourvideos"
          />
          <Sidebarlink
            titles="WatchLater"
            icons={<MdOutlineWatchLater size={20} />}
            urls="/Watchlater"
          />
          <Sidebarlink
            titles="Liked Videos"
            icons={<AiFillLike size={20} />}
            urls="/Liked"
          />
        </div>
        <div className="first flex-col">
          <h2 className="flex items-center justify-start mt-5">Explore</h2>
          <Sidebarlink
            titles="Trending"
            icons={<AiFillFire size={20} />}
            urls="/Trending"
          />
          <Sidebarlink
            titles="Music"
            icons={<IoMusicalNoteOutline size={20} />}
            urls="/Music"
          />
          <Sidebarlink
            titles="Gaming"
            icons={<SiYoutubegaming size={20} />}
            urls="/Liked"
          />
          <Sidebarlink
            titles="Sports"
            icons={<AiFillTrophy size={20} />}
            urls="/Sport"
          />
        </div>
        <div className="first flex-col">
        <Sidebarlink
            titles="Settings"
            icons={<AiFillSetting size={20} />}
            urls="/Settings"
          />
        <Sidebarlink
            titles="Report history"
            icons={<AiOutlineFlag size={20} />}
            urls="/Sport"
          />
        <Sidebarlink
            titles="Help"
            icons={<AiOutlineQuestionCircle size={20} />}
            urls="/Sport"
          />
        <Sidebarlink
            titles="Send feedback"
            icons={<RiFeedbackLine size={20} />}
            urls="/Sport"
          />
        </div>
      </div>}
      {/* <Link to="/Home" className="home">

<div className="home flex items-center mb-5 mt-5">
<AiFillHome size={35}/>Home

</div>
</Link>
<Link to="/Shorts" className="shorts ">

<div className="shorts flex items-center mb-5">
<BsTiktok size={35}/>Shorts
      
      </div>
    </Link>
    <Link to="/Subscription" className="home ">

      <div className="subs flex items-center mb-5">
      <MdSubscriptions size={35}/>Subscriptions
     
      </div>
    </Link> */}
    </>
  );
};

export default Sidebar;
