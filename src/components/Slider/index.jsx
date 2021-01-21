import React from "react";
import SliderSlick from "react-slick";
import Card from "../Card";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./styles.scss";

const cakes = [
  { name: "Морковный", url: "url('./images/s1.png')" },
  { name: "Шоколадный", url: "url('./images/s2.png')" },
  { name: "Маленькая девочка", url: "url('./images/s3.png')" },
  { name: "Фруктовый", url: "url('./images/s4.png')" },
  { name: "Шоколадный", url: "url('./images/s5.png')" },
  { name: "Морковный", url: "url('./images/s1.png')" },
  { name: "Шоколадный", url: "url('./images/s2.png')" },
  { name: "Маленькая девочка", url: "url('./images/s3.png')" },
  { name: "Фруктовый", url: "url('./images/s4.png')" },
  { name: "Шоколадный", url: "url('./images/s5.png')" },
  { name: "Морковный", url: "url('./images/s1.png')" },
  { name: "Шоколадный", url: "url('./images/s2.png')" },
  { name: "Маленькая девочка", url: "url('./images/s3.png')" },
  { name: "Фруктовый", url: "url('./images/s4.png')" },
  { name: "Шоколадный", url: "url('./images/s5.png')" },
];

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <div className="slider-container">
      <div className="title">Бестселлеры</div>
      <SliderSlick {...settings}>
        {cakes.map(({ name, url }, i) => (
          <Card name={name} imgUrl={url} key={i} />
        ))}
      </SliderSlick>
    </div>
  );
};

export default Slider;
