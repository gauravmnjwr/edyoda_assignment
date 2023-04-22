import React from "react";
import userImg from "../assets/kindpng.png";
import edyoda from "../assets/edyoda.png";

function Header() {
  return (
    <div className="header_main">
      <div className="header_home">
        <img src={edyoda} alt="" />
      </div>
      <div className="header_user">
        <p>Hi Test Learner! </p>
        <img src={userImg} alt="" />
      </div>
    </div>
  );
}

export default Header;
