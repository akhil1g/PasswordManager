import React from "react";
import "./Main.css";
import { useNavigate } from "react-router-dom";

function Main() {
    const navigate = useNavigate();
    function handleRegister(){
        navigate('./register');
    }
    function handleLogin(){
        navigate('./login');
    }
    return (
        <div className="main-container">
            <div className="main-left-sec" >
                <span className="main-heading1">Password Manager</span>
                <p className="main-left-sec-para">
                    Elevate your online security with a password manager app. 
                    Generate, store, and retrieve strong passwords effortlessly. 
                    Seamlessly manage and organize your credentials, never again struggling to recall forgotten passwords. 
                    Enjoy one-click logins and worry-free browsing. 
                    Protect your digital identity with advanced encryption algorithms. 
                    Upgrade now and experience a safer, simpler online world!
                </p>
            </div>
            <div className="main-right-sec">
                <h3 className="main-heading2">Welcome!</h3>
                <p className="main-right-sec-para">New here? </p>
                <p className="main-right-sec-para">Get started by creating an account with us.</p>
                <button 
                    className="register-btn"
                    onClick={handleRegister}
                >Register</button>
                <p className="main-right-sec-para">Already an User?</p>
                <p className="main-right-sec-para">Click below to continue.</p>
                <button 
                    className="login-btn"
                    onClick={handleLogin}
                >Login</button>
            </div>
        </div>
    );
}
export default Main;