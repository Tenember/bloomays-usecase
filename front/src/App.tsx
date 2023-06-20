import React, { useState } from "react";
import logo from "./bloomays-logo.svg";
import "./App.css";
import LeavingArrivingBloomers from "./components/LeavingArrivingBloomers/LeavingArrivingBloomers";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bloomays use case</p>
        <button onClick={togglePopup}>Open Popup</button>
      </header>

      {showPopup && <LeavingArrivingBloomers onClose={togglePopup} />}
    </div>
  );
}

export default App;
