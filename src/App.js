import React from "react";
import Welcome from "./Component/Welcome";
import InfoBox from "./Component/Info";
import Menu from "./Component/Menu";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__snapSection">
        <Welcome />
      </div>

      <div className="app__snapSection">
        <InfoBox />
      </div>

      <div className="app__snapSection">
        <Menu />
      </div>
    </div>
  );
}

export default App;
