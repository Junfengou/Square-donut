import React from "react";
import Menu_logo from "../pictures/newMenu.png";
import Donuts from "../logos/Donut_cakes.png";
import Fritters from "../logos/Filled_fritters.png";
import Vegan from "../logos/Vegan.png";
import Drinks from "../logos/Drinks.png";
import Colored from "../pictures/colored.png";
import Half_Colored from "../pictures/half-colored.png";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      <div className="menu__info">
        <div className="menu__logo">
          <img src={Colored} className="menu__logo_colored" />
          <img src={Menu_logo} className="menu__logo_logo" />
          <img src={Half_Colored} className="menu__logo_colored" />
        </div>

        <div className="menu__content">
          <h5>
            TO GO ORDERS COME IN DOZEN & HALF DOZEN SIZES. CALL 402-359-1555 THE
            PREVIOUS DAY BEFORE 11 AM FOR NEXT DAY PICK UP — LETTER DONUTS &
            CUSTOM ORDERS REQUIRE 48 HR. NOTICE. TO ENSURE THAT WE CAN SERVE ALL
            CUSTOMERS, CUSTOM ORDERS ARE ON A LIMITED FIRST COME, FIRST SERVE
            BASIS.
          </h5>
        </div>
      </div>

      <div className="menu__container">
        <div className="menu__card">
          <div className="menu__img">
            <img src={Donuts} />
          </div>

          <div className="menu__content">
            <div className="menu__content__wrapper">
              <div className="menu__content__item">
                <h4>Raised Donuts</h4>
                <h6>Glazed</h6>
              </div>

              <div className="menu__content__item">
                <h4>Raised Topped</h4>
                <h6>
                  Chocolate | Vanilla | Maple | Cinnamon Sugar | Chocolate
                  Peanut (SP) | Maple Bacon (SP)
                </h6>
              </div>

              <div className="menu__content__item">
                <h4>Cake Donuts</h4>
                <h6>
                  Original glazed & plain (Original is SC Old Fashion cake
                  donut)
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="menu__card">
          <div className="menu__img">
            <img src={Fritters} />
          </div>

          <div className="menu__content">
            <div className="menu__content__wrapper">
              <div className="menu__content__item">
                <h4>Filled (Specialties)</h4>
                <h6>
                  Powdered Sugar + Fruit of the Day Square John (Bavarian
                  Filled, Chocolate Topped) Square Jane (Cream Filled, Chocolate
                  Topped)
                </h6>
              </div>

              <div className="menu__content__item">
                <h4>Fritters (Specialties)</h4>
                <h6>Apple | Caramel Apple</h6>
              </div>

              <div className="menu__content__item">
                <h4>Topped Original Cake</h4>
                <h6>Chocolate | Vanilla | Maple</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="menu__card">
          <div className="menu__img">
            <img src={Vegan} />
          </div>

          <div className="menu__content">
            <div className="menu__content__wrapper">
              <div className="menu__content__item">
                <h4>CAKE</h4>
                <h6>GF Glazed | GF Chocolate Topped | GF Vanilla Topped</h6>
              </div>

              <div className="menu__content__item">
                <h4>RAISED OR CAKE </h4>
                <h6>Vegan Chocolate</h6>
              </div>

              <div className="menu__content__item">
                <h4>RAISED OR CAKE </h4>
                <h6>Vanilla Topped</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="menu__card">
          <div className="menu__img">
            <img src={Drinks} />
          </div>
          <div className="menu__content">
            <div className="menu__content__wrapper">
              <div className="menu__content__item">
                <h4>HOT</h4>
                <h6>Coffee (provided by Hardy Coffee Co)</h6>
              </div>

              <div className="menu__content__item">
                <h4>COLD</h4>
                <h6>Bottled Water | Pop | Iced Tea | Gatorade | Sobe Water</h6>
              </div>

              <div className="menu__content__item">
                <h4>MILK / JUICES</h4>
                <h6>Premium Orange Juice | Milk | Muscle Milk</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
