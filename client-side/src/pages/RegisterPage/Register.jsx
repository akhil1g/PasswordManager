import React,{useState} from "react";
import Navbar from "../Navbar/Navbar";
import './register.css'


const Register=function()
{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    async function registerUser(event)
    {
        event.preventDefault();
        const response=await fetch('http://localhost:2000/api/register',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name,email,password}),
        });
        const data=await response.json;
        console.log(data);
    }

    return (
        <div>
            <Navbar />
            <div className="container">
            <form onSubmit={registerUser}>
            <h1>Register</h1>
            <div className="sub">
            <label>Name : </label>
                <input value={name} 
                onChange={function(e){
                    setName(e.target.value)
                }} 
                type="text" 
                placeholder="Name"
                 name="name"></input>
            </div>
            <div className="sub">
            <label>Email : </label>
                <input value={email} 
                 onChange={function(e){
                    setEmail(e.target.value)
                }} 
                type="email"
                 placeholder="Email" 
                 name="email"></input>
            </div>
            <div className="sub">
            <label>Password : </label>
                <input value={password}
                 onChange={function(e){
                    setPassword(e.target.value)
                }} 
                 type="password" 
                 placeholder="*****" 
                 name="password"></input>
            </div>
                 <input type="submit" value="Register" className="button"></input>
            </form>
            </div>
        </div>
    )
}
export default Register;