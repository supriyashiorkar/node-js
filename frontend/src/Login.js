
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    }, [])
    const loginHandle = async () => {
        // console.log(email, password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        if (result.auth) {

            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.auth))
            navigate('/')
        } else {
            alert("no data")
        }
    }

    return (
        <div className="login">
            <input type="email" placeholder="Enter Email" className="inputfield"
                onChange={(e) => setEmail(e.target.value)} value={email} />

            <input type="password" placeholder="Enter Password" className="inputfield"
                onChange={(e) => setPassword(e.target.value)} value={password} />
            <button type="button" className="signup-btn" onClick={loginHandle} >Login</button>
        </div>
    )
}
export default Login;