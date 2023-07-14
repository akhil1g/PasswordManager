import React from "react";
import './navbar.css';
import logo from "./logo.png";

export default function Navbar()
{
    const handleonClick=function()
    {
        window.location.href="/";
    }
    const handlelogout=function()
    {
        localStorage.removeItem('token');
        window.location.href="/";
    }
    return (
        <div className="nav-box">
            <img src={logo} alt="Logo" className="nav-logo" />
            <div className="nav-heading" onClick={handleonClick}>PassWord Manager</div>
            <div className="logout-button"><button className="logout" onClick={handlelogout}>Logout</button></div>
        </div>
    );
}