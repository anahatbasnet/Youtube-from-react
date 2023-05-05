import React from "react";

const Buttonlink = ({ title }) => {
  return (
    <>
      <span className="btn border w-10 4 h-6 m-4 flex items-center justify-center  ">
        <button>{title}</button>
      </span>
    </>
  );
};

export default Buttonlink;
