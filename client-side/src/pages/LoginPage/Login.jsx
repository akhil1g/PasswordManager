import React,{useState} from "react";
import Navbar from "../Navbar/Navbar";
import './login.css'
const Login=function()
{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    async function loginUser(event)
    {
        event.preventDefault();
        const response=await fetch('http://localhost:2000/api/login',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email,password}),
        });
        const data=await response.json;
        console.log(data);
    }

    return (
        <div>
            <Navbar />
            <div className="container">
            <form onSubmit={loginUser}>
            <h1>Login</h1>
            <div className="sub">
                <label>Email : </label>
                    <input value={email} 
                    onChange={function(e){
                        setEmail(e.target.value)
                    }} 
                    type="email"
                    placeholder="Email" 
                    name="email" >
                    </input>
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
                 <input type="submit" value="Login" className="button"></input>
            </form>
            </div>
            </div>
    )
}
export default Login;