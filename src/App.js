import React from "react";
import Welcome from "./Component/Welcome";
import InfoBox from "./Component/Info";

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
    </div>
  );
}

export default App;