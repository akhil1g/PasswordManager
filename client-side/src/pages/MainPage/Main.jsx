import React from "react";
import "./Main.css";

// import bgimage from "./bg.webp";

function Main() {
  return (
    <div className="container">
      <div
        className="left-sec"
        // style={{
        //   width: `100%`,
        //   height: `100%`,
        //   backgroundImage: `url(${bgimage})`
        // }}
      >
        <h3>About Password Managers</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
      <div className="right-sec">
        <div className="welcome-message">
          <h3>Welcome!</h3>
          <p>Get started by either logging in or signing up.</p>
        </div>
        <div className="buttons-container">
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
