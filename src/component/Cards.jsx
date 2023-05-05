import React from "react";
import { Link } from "react-router-dom";

import card from "../assets/card.jpg";

const Cards = ({ videos }) => {
  return (
    <>
    <Link to={`videos/${videos.video_id}`}>

      <div className="cards border- none border-500 w-[23rem] h-[20rem] ml-10 mt-10 flex-col justify-start">
        <div className="img    ">
          <img
            src={videos.thumbnails[0].url}
            alt=""
            className="rounded-xl w-[100%] h-[13rem]  hover:rounded-none"
            />
        </div>
        <div className="title flex">
          <div className="profile-vid flex">
            <img src="./logo512.png" alt="profile" className="w-6 h-4 mt-1" />
          </div>
          <div className="des">
            <p>{videos.title}</p>
            <p>{videos.author}</p>
            <span>{videos.number_of_views}</span>
            <span>{videos.published_time}</span>
          </div>
        </div>
      </div>
            </Link>
    </>
  );
};

export default Cards;
