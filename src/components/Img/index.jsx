import React from "react";
import "./styles.scss";

const Img = ({ size = "small", url = "", title = "" }) => {
  return (
    <div className="img-container">
      <div className={size} style={{ backgroundImage: `${url}` }} />
      <p>{title}</p>
    </div>
  );
};

export default Img;
