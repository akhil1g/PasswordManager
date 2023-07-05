import React from "react";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div className="root">
      <Navbar />
      <h1>Hello, User</h1>
      <h2>What would you like to do?</h2>
      <div className="root-container">
        <div className="child-container ">
          <a href="kfknvv">Store a Password</a>
        </div>
        <div className="child-container ">
          <a href="efm ve">Retrieve a Password</a>
        </div>
        <div className="child-container">
          <a href="vrdf">Generate a Password</a>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
export default Home;
