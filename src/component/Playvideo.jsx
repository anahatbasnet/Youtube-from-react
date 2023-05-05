import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const Playvideo = () => {
  const { id } = useParams();
  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${id}`}
      controls
      height={"100vh"}
      width={"100vw"}
      playing={true}
    />
  );
};

export default Playvideo;
