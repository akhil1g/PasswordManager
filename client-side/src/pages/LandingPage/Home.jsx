import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import jwt from 'jwt-decode'
import {useNavigate} from 'react-router-dom'
import './home.css'
function Home() {
    const history=useNavigate();
    const [userName,setName]=useState("");
    
    async function getName() {
         const req=await fetch("http://localhost:2000/api/home",{
          headers: {
            'x-access-token': localStorage.getItem('token'),
          },
         })
        
         const data=await req.json();
         setName(data.name)
         console.log(data.name);
      }
  
    useEffect(function()
    {
      const token=localStorage.getItem('token');
      if(token)
      {
        const user=jwt(token);
        console.log(user);
        if(!user)
        {
          localStorage.removeItem('token');
          history.replace('/login');
        }
        else
        {
            getName();
        }
      }
    },[])

  return (
    <div className="home-container">
      <h1 className="home-heading1">Hello, {userName}!</h1>
      <h2 className="home-heading2">What would you like to do?</h2>
      <div className="sub-home-container">
        <Link to="/Store" className="home-btn">Store a password</Link>
        <Link to="/Retrieve" className="home-btn">Retrieve a password</Link>
        <Link to="/Generate" className="home-btn">Generate a password</Link>
      </div>
    </div>
  );
}
export default Home;