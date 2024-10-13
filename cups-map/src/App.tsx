import React from "react";

import "./App.css";
import Main from "./components/main/Main";
import GoogleMapsLoader from "./components/maps/GoogleMapLoader";

function App() {
  return (
    <div>
      <GoogleMapsLoader>
        <Main />
      </GoogleMapsLoader>
    </div>
  );
}

export default App;