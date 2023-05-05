import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Cards from "./Cards";
import Button from "./Button";
import Content from "./Content";
import { useDispatch, useSelector } from "react-redux";
import { instance } from "../axios";
import { setVideos } from "../redux/Features/ytslice";

const Rootlayout = () => {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  

  useEffect(() => {
    const fetchVideos = async () => {
      await instance
        .get(`/trending/`)
        .then((res) => {
          dispatch(setVideos(res.data));
        })
        .catch((err) => console.log(err));
    };

    fetchVideos();
  }, []);

  return (
    <div className="m-0">
      <Nav />
      <div className="flex">
        <Sidebar />
        <div>
          <Button />
          <Content />
        </div>
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default Rootlayout;
