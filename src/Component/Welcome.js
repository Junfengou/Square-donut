import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome">
      <h3>This is the welcome page</h3>
      <div className="welcome__pictures">
        <div className="welcome__logo">
          <h2>Logo</h2>
        </div>

        <div className="welcome__tagline">
          <h4>Tagline</h4>
        </div>

        <div className="welcome__content">
          <h6>Content</h6>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
