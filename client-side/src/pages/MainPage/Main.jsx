import React from "react";
import "./Main.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Main() {

    const navigate = useNavigate();
    function handleLogin(){
        navigate('./login');
    }
    function handleRegister(){
        navigate('./register');
    }

  return (
    <div className="container">
      <div className="left-sec" >
        <h1>Password Manager</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
      <div className="right-sec">
        <h3>Welcome!</h3>
        <p>New here? </p>
        <p>Get started by creating an account with us.</p>
        <button 
            className="register-btn"
            onClick={handleRegister}
        >Register</button>
        <p>Already an User?</p>
        <p>Click below to continue.</p>
        <button 
            className="login-btn"
            onClick={handleLogin}
        >Login</button>
      </div>
    </div>
  );
}

export default Main;