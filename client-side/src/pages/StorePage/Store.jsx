import React, { useState,useEffect } from "react";
import jwt from 'jwt-decode';
import {useNavigate} from 'react-router-dom';
import "./store.css";

function Store() {
    const history=useNavigate();
    const [mail,setMail]=useState("");
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
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(passwordData);
        const website=passwordData.website;
        const username=passwordData.username;
        const webpassword=passwordData.webpassword;
        const note=passwordData.note;
        const response=await fetch('http://localhost:2000/api/store',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({mail,website,username,webpassword,note}),
            });
    
            const data=await response.json();
            console.log(data.status==="ok");
            if(data)
            {
                alert('Password Added Successfully!!!!');
            }
            else
            {
                alert('Something is wrong..');
            }
        
      }

      async function getuserinfo(e)
      {  
          setMail(e); 
          console.log(mail);
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
              getuserinfo(user.email);
          }
        }
      })


      return (
        <div>
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
            <div className="sub-store-container">
              <label className="store-label">Password: </label>
              <input
                className="store-input"
                type="password"
                id="password"
                placeholder="***"
                name="webpassword"
                value={passwordData.webpassword}
                onChange={handleChange}
              />
            </div>
            <div className="sub-store-container">
              <label className="store-label">Add a Note: </label>
              <textarea
                className="store-add-note"
                rows="5"
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
        </div>
      );
    }
export default Store;