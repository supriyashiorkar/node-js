import { useState } from "react";
import {  useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   const navigate=useNavigate()

   
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    },[])

    const collectData = async () => {
        console.log(name, email, password);
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);

        localStorage.setItem("user", JSON.stringify(result.result))
        localStorage.setItem("token", JSON.stringify(result.auth))
        navigate('/')

    }
    return (
        <>
                 <h1>Register</h1>
            <div className="register">

                <input type="text" placeholder="Enter name" className="inputfield" onChange={(e) => setName(e.target.value)} value={name} />
                <input type="email" placeholder="Enter Email" className="inputfield" onChange={(e) => setEmail(e.target.value)} value={email} />
                <input type="password" placeholder="Enter Password" className="inputfield" onChange={(e) => setPassword(e.target.value)} value={password} />
                <button type="button" className="signup-btn" onClick={collectData}>Sign Up</button>
            </div>
        </>
    )
}
export default Signup;