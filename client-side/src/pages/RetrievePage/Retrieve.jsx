import React,{useEffect,useState} from "react";
import "./retrieve.css";
import {useNavigate} from 'react-router-dom'
import jwt from 'jwt-decode'




function Retrieve() {
  const history=useNavigate();
   const [card,setCard]=useState([]);

  
function Cards(props) {
  console.log(props,"props");
    return (
      <div className="ret-box">
        <h2 className="ret-heading2">{props.website}</h2>
        <div className="ret-sub-box">
          <p className="ret-username">
            <em>Username: </em> {props.username}
          </p>
          <p className="ret-pswd">
            <em>Password: </em> {props.webpassword}
          </p>
        </div>
        <div className="ret-note">Additional Notes: {props.notes}</div>
      </div>
    );
  }
    

  async function getInfo()
  {
      const req=await fetch("http://localhost:2000/api/retrieve",{
          headers: {
            'x-access-token': localStorage.getItem('token'),
          },
         })
      const data=await req.json();
       console.log(data.data,"42");
      const newdata=data.data;
      console.log(newdata,"newdata");
      
      
      setCard(newdata);
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
            getInfo();
        }
      }
    },[])
  
  return (
    <div>
    <div className="ret-container">
      <h1 className="ret-heading1">Retrieve Passwords</h1>
      {  card.map((x) => (
        <Cards
           key={x.data._id}
          website={x.data.website}
          username={x.data.username}
          webpassword={x.password}
          notes={x.data.note}
        />
      ))}
    </div>
    </div>
  );
}
export default Retrieve;