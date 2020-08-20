import React from "react";
import "./Info.css";
import Bacons from "../pictures/bacons.png";

function Info() {
  return (
    <div className="info">
      <div className="info__container">
        <div className="info__Left">
          <div className="info__img">
            <img src={Bacons} />
          </div>
        </div>
        <div className="info__Right">
          <div className="info__moreInfo">
            <h2>About Us</h2>
            <p>
              Whether you’re nearby Square Donut in West Omaha or you drive a
              few minutes, we’re honored to be a part of your morning routine.
              Create memories with the family or be the hero at the office.
              Square Donut has handcrafted donuts to make your heart (and mouth)
              sing.
            </p>

            <h3>Phone</h3>
            <h5>(402) 359-1555</h5>

            <h3>Hours</h3>
            <h5>Every Day 6AM-12PM or until sold out</h5>

            <h3>Location</h3>
            <h5>15825 W. Maple Rd. Omaha, Nebraska 68116</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
