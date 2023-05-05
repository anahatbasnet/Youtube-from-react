import React from "react";
import YT from "../assets/YT.png";
import { BsCameraReelsFill } from "react-icons/bs";
import { BsFillMicFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { settogglevalue } from "../redux/Features/toggleslic";

const Nav = () => {
  const dispatch = useDispatch()
  const togglehandler=()=>{
    dispatch(settogglevalue())
  }

  return (
    <nav>
      <div className="nav flex mt-6 ml-8 items-center mr-8">
        <div className="logo flex justify-around">
          <div className="menu">
            <i

            onClick={togglehandler}
              class="fa-solid fa-bars mr-[2rem] cursor-pointer"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </div>
          <div className="yt mr-[5rem] mt-0 w-[7rem]">
            <img src={YT} alt="YouTube" className="w-[16rem]  mt-0 " />
          </div>
        </div>
        <div className="search-bar flex items-center justify-center  ">
          <div className="searching">
            <input
              type="text"
              placeholder="Search"
              className=" border border-black p-2 rounded-l-3xl ml-[15rem] w-[25rem] md:"
            />
          </div>
          <div className="searchicon = border border-black p-2 rounded-r-3xl w-9 h-[2.6rem] ">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="mic h-11 w-11 items-center flex justify-center ml-1">
            <BsFillMicFill style={{ fontSize: "1.5rem" }} />
          </div>
        </div>
        <div className="buttons flex  w-[30%] justify-end  mr-5">
          <div className="vid mr-[2rem]">
            <BsCameraReelsFill style={{ fontSize: "1.5rem" }} />
          </div>
          <div className="bell mr-[2rem]">
            <FaBell style={{ fontSize: "1.5rem" }} />
          </div>
          <div className="profile mr-[2rem]">
            <CgProfile style={{ fontSize: "1.5rem" }} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
