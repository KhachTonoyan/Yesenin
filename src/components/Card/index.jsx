import React, { useState } from "react";
import "./styles.scss";

const Card = ({ imgUrl = "", name = "" }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="card-container">
      <div
        className="like"
        style={{
          backgroundImage: isLiked
            ? "url('./images/like.png')"
            : "url('./images/unlike.png')",
        }}
        onClick={() => setIsLiked(!isLiked)}
      />
      <div className="img" style={{ backgroundImage: `${imgUrl}` }} />
      <p className="name">{name}</p>
      <p className="price">1 350 руб</p>
      <div className="select-container">
        <div
          className="grupp"
          style={{
            backgroundImage: "url('./images/gruppButton.png')",
          }}
        />
        <div
          className="shape"
          style={{
            backgroundImage: "url('./images/Shape.png')",
          }}
        />
        <select name="" id="">
          <option value="1">1-2 чел</option>
          <option value="2">3-4 чел</option>
          <option value="3">5-6 чел</option>
        </select>
      </div>
      <button
        className="buy-button"
        style={{ backgroundImage: "url('./images/ShopButton.png')" }}
      />
    </div>
  );
};

export default Card;
