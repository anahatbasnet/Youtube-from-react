import React from "react";
import Cards from "./Cards";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Playvideo from "./Playvideo";

const Content = () => {
  const collection = useSelector((state) => state.yt.videos);
  // console.log(videos);
  // console.log("hello");
  // if (videos)

  return (
    <>
    

      <div className="card flex flex-wrap items-center justify-center w-[100%] ">
        {collection !== " " && collection.videos.map(item=>{return <Cards videos={item} />})}
      </div>
    
    </>
  );
};

export default Content;
