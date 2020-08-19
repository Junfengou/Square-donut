import React from "react";
import "./Info.css";
import DonutThree from "../pictures/DonutThree.jpg";

function Info() {
  return (
    <div className="info">
      <h3>This is the info boxes page</h3>
      <div className="info__container">
        <div className="info__card">
          <div className="info__img">
            <img src={DonutThree} />
          </div>
          <div className="info__content">
            <h2>NEW DONUT SHOP!</h2>
            <p>
              Whether you’re nearby Square Donut in West Omaha or you drive a
              few minutes, we’re honored to be a part of your morning routine.
              Create memories with the family or be the hero at the office.
              Square Donut has handcrafted donuts to make your heart (and mouth)
              sing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
