import React, { useState } from "react";
import "./store.css";

function Store() {
  const [passwordData, setPasswordData] = useState({
    website: "",
    username: "",
    password: "",
    note: ""
  });
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setPasswordData({
      ...passwordData,
      [name]: value
    });
    console.log(passwordData);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(passwordData);
    setPasswordData({
      website: "",
      username: "",
      password: "",
      note: ""
    });
  }

  return (
    <div className="store-container">
      <form className="store-form">
        <h2 className="store-heading">Store a Password</h2>
        <div className="sub-store-container">
          <label className="store-label">Website: </label>
          <input
            className="store-input"
            type="text"
            id="username"
            placeholder="enter url.."
            name="website"
            value={passwordData.website}
            onChange={handleChange}
          />
        </div>
        <div className="sub-store-container">
          <label className="store-label">Username: </label>
          <input
            className="store-input"
            type="text"
            id="username"
            placeholder="enter username"
            name="username"
            value={passwordData.username}
            onChange={handleChange}
          />
        </div>
        <div className="sub">
          <label className="store-label">Password: </label>
          <input
            className="store-input"
            type="password"
            id="password"
            placeholder="***********"
            name="password"
            value={passwordData.password}
            onChange={handleChange}
          />
        </div>
        <div className="sub">
          <label className="store-label">Add a Note: </label>
          <textarea
            className="store-input"
            type="text"
            id="note"
            placeholder="add a note...."
            name="note"
            value={passwordData.note}
            onChange={handleChange}
          />
        </div>
        <button className="store-button" type="submit" onClick={handleSubmit}>
          Store
        </button>
      </form>
    </div>
  );
}

export default Store;
  