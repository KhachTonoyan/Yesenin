import React from "react";
import Img from "../Img";
import Slider from "../Slider";
import "./styles.scss";

const categories = [
  { title: "Классические", url: "url('./images/cake1.png')" },
  { title: "Авторские", url: "url('./images/cake2.png')" },
  { title: "Дессерты", url: "url('./images/cake3.png')" },
  { title: "Торты на заказ", url: "url('./images/cake4.png')" },
];

const Home = () => {
  const rendorBackgroundImages = () => (
    <>
      <div
        className="first-background"
        style={{ backgroundImage: "url('./images/back1.png')" }}
      />
      <div
        className="second-background"
        style={{ backgroundImage: "url('./images/back2.png')" }}
      />
      <div
        className="third-background"
        style={{ backgroundImage: "url('./images/back3.png')" }}
      />
      <div
        className="fourth-background"
        style={{ backgroundImage: "url('./images/back4.png')" }}
      />
    </>
  );
  return (
    <div className="home-container">
      {rendorBackgroundImages()}
      <div className="header-container">
        <div
          className="menu"
          style={{ backgroundImage: "url('./images/menu.png')" }}
        />
        <div
          className="logo"
          style={{ backgroundImage: "url('./images/logo.png')" }}
        />
        <div className="nav">
          <p>контакты</p>
          <p>корзина (0)</p>
        </div>
      </div>
      <div className="to-order-card">
        <p>Здесь есть</p>
        <p>все твои</p>
        <p>любимые</p>
        <p>торты</p>
        <button>Заказать</button>
      </div>
      <div className="choose-a-section">
        <div
          className="vector-left"
          style={{
            backgroundImage: "url('./images/VectorLeft.png')",
          }}
        />
        <div>Выбери раздел</div>
      </div>
      <div className="categories">
        {categories.map(({ url, title }, i) => (
          <Img url={url} size="small" title={title} key={i} />
        ))}
      </div>
      <div className="about-us">
        <div>
          <div
            style={{
              backgroundImage: "url('./images/icon1.png')",
            }}
          />
          <p>Доставка в любую точку города</p>
        </div>
        <div className="middle">
          <div
            style={{
              backgroundImage: "url('./images/icon2.png')",
            }}
          />
          <p>Собери торт по своему вкусу</p>
        </div>
        <div>
          <div
            style={{
              backgroundImage: "url('./images/icon3.png')",
            }}
          />
          <p>Получи подарки с каждым заказом</p>
        </div>
      </div>
      <div className="day-cake">
        <div>Торт дня</div>
        <div
          className="vector-right"
          style={{
            backgroundImage: "url('./images/VectorRight.png')",
          }}
        />
      </div>
      <div
        className="day-cake-img"
        style={{
          backgroundImage: "url('./images/bigImg.png')",
        }}
      />
      <button className="order-button">Заказать сейчас</button>
      <Slider />
    </div>
  );
};

export default Home;
