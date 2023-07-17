import React from "react";
import './navbar.css';
import logo from "./logo.png";
import Check from "./check";
export default function Navbar()
{
    const handleonClick=function()
    {
        const token=localStorage.getItem('token');
        if(token)
        {
            window.location.href="/home";
        }
        else 
        {
            window.location.href="/";
        }
    }
   
    return (
        <div className="nav-box">
            <img src={logo} alt="Logo" className="nav-logo" />
            <div className="nav-heading" onClick={handleonClick}>PassWord Manager</div>
            <Check />
        </div>
    );
}