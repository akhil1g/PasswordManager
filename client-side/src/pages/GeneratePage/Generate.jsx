import React from "react";
import "./generate.css";
function Generate() {
  return (
    <div className="container">
      <h3>Password Generator</h3>
      <div className="display-container">
        <input
          readonly
          placeholder="***********"
          className="display"
          data-passwordDisplay
        />
        {/* <button className="copyBtn" data-copy>
          <span className="tooltip" data-copyMsg></span>
          <img src="./assets/copy.svg" alt="copy" width="23" height="23" />
        </button> */}
      </div>

      <div className="input-container">
        {/* <!--password length section--> */}
        <div className="length-container">
          <p>Password Length</p>
          <p data-lengthNumber>0</p>
        </div>
        {/* <!--slider--> */}
        <input
          type="range"
          min="1"
          max="20"
          className="slider"
          step="1"
          data-lengthSlider
        />
        {/* <!-- checkboxes--> */}
        <div className="check">
          <input type="checkbox" id="uppercase" />
          <label for="uppercase">Includes Uppercase letters</label>
        </div>
        <div className="check">
          <input type="checkbox" id="lowercase" />
          <label for="lowercase">Includes Lowercase letters</label>
        </div>
        <div className="check">
          <input type="checkbox" id="numbers" />
          <label for="numbers">Includes Numbers </label>
        </div>
        <div className="check">
          <input type="checkbox" id="symbols" />
          <label for="symbols">Includes Symbols </label>
        </div>
        {/* <!-- strength section--> */}
        <div className="strength-container">
          <p>Strength</p>
          <div className="indicator" data-indicator></div>
        </div>
        {/* <!-- generate password--> */}
        <button className="generateButton">Generate Password</button>
      </div>
    </div>
  );
}

export default Generate;