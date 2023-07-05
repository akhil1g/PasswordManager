import React, { useState } from "react";
import "./store.css";
import Navbar from "../Navbar/Navbar";

function Store() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [notes, setNotes] = useState("");
    const handleSubmit = () => {
      setUsername("");
      setPassword("");
      setNotes("");
    };
  
    return (
      <div>
        <Navbar />
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h2>Store a Password</h2>
            <div className="sub">
              <label>Username: </label>
              <input
                type="text"
                id="username"
                placeholder="username"
                value={username}
                onChange={(x) => setUsername(x.target.value)}
              />
            </div>
            <div className="sub">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                placeholder="***********"
                value={password}
                onChange={(x) => setPassword(x.target.value)}
              />
            </div>
            <div className="sub">
              <label htmlFor="notes">Add a Note: </label>
              <input
                type="text"
                id="note"
                placeholder="add a note...."
                value={notes}
                onChange={(x) => setNotes(x.target.value)}
              />
            </div>
  
            <button type="submit">Store</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Store;
  