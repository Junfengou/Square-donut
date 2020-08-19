import React from "react";
import "./Welcome.css";
import logo from "../pictures/logo.png";
import tagline from "../pictures/Tagline.png";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__pictures">
        <div className="welcome__logo">
          <img src={logo} />
        </div>

        <div className="welcome__tagline">
          <img src={tagline} />
        </div>

        <div className="welcome__content">
          <h3>HANDCRAFTED WITH LOVE IN OMAHA, NE</h3>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
