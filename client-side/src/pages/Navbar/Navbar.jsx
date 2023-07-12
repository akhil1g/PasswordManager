import React from "react";
import './navbar.css';
import logo from "./logo.png";

export default function Navbar()
{
    return (
        <div className="nav-box">
            <img src={logo} alt="Logo" className="nav-logo" />
            <div className="nav-heading">PassWord Manager</div>
        </div>
    );
}