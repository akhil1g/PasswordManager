import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  function handleStore() {
    navigate("./Store");
  }
  function handleRetrieve() {
    navigate("./Retrieve");
  }
  function handleGenerate() {
    navigate("./Generate");
  }

  return (
    <div className="home-container">
      <h1 className="home-heading1">Hello, User!</h1>
      <h2 className="home-heading2">What would you like to do?</h2>
      <div className="sub-home-container">
        <button className="home-btn" type="submit" onClick={handleStore}>
          Store a Password
        </button>
        <button className="home-btn" type="submit" onClick={handleRetrieve}>
          Retrieve a Password
        </button>
        <button className="home-btn" type="submit" onClick={handleGenerate}>
          Generate a Password
        </button>
      </div>
    </div>
  );
}
export default Home;
