import React from "react";
import "./Info.css";
import DonutThree from "../pictures/DonutThree.jpg";
import DonutTwo from "../pictures/DonutTwo.jpg";

function Info() {
  return (
    <div className="info">
      <div className="info__container">
        <div className="info__card">
          <div className="info__img">
            <img src={DonutThree} />
          </div>
          <div className="info__content">
            <h3>NEW DONUT SHOP!</h3>
            <p>
              Whether you’re nearby Square Donut in West Omaha or you drive a
              few minutes, we’re honored to be a part of your morning routine.
              Create memories with the family or be the hero at the office.
              Square Donut has handcrafted donuts to make your heart (and mouth)
              sing.
            </p>
          </div>
        </div>

        <div className="info__card">
          <div className="info__img">
            <img src={DonutTwo} />
          </div>
          <div className="info__content">
            <h3>Location</h3>
            <p>15825 W. Maple Rd. Omaha, Nebraska 68116</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3>Phone: (402) 359-1555</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
