import React from "react";
import "./Banner.scss";

const Banner = (props) => {
  return (
    <div className="Banner">
      <h1 className="banner_title">{props.title}</h1>
      <img src={props.src} alt="banniere-kasa" className="banner_img" />
    </div>
  );
};

export default Banner;
