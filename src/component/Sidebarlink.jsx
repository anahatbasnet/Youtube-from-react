import React from "react";

import { Link } from "react-router-dom";

const Sidebarlink = ({ titles, icons, urls }) => {
  return (
    <>
      <Link to={urls}>
        <div className="sidebar flex items-center mb-5 mt-5 text-decoration-thickness: 5px m-5 space-x-5 ;">
          {icons}
          {titles}
        </div>
      </Link>
    </>
  );
};

export default Sidebarlink;
