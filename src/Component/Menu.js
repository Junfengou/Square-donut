import React from "react";
import DonutThree from "../pictures/DonutThree.jpg";
import DonutTwo from "../pictures/DonutTwo.jpg";
import Logo from "../pictures/logo2.png";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      <div className="menu__container">
        <div className="menu__card">
          <div className="menu__img">
            <img src={Logo} />
          </div>
          <div className="menu__content">
            <h3>Donuts / Cakes</h3>
            <p>Donuts and cakes</p>
          </div>
        </div>

        <div className="menu__card">
          <div className="menu__img">
            <img src={Logo} />
          </div>
          <div className="menu__content">
            <h3>Filled / Fritters</h3>
            <p>Filled donuts</p>
          </div>
        </div>

        <div className="menu__card">
          <div className="menu__img">
            <img src={Logo} />
          </div>
          <div className="menu__content">
            <h3>Vegan options</h3>
            <p>Veggies</p>
          </div>
        </div>

        <div className="menu__card">
          <div className="menu__img">
            <img src={Logo} />
          </div>
          <div className="menu__content">
            <h3>Drinks</h3>
            <p>Hot / Cold</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
