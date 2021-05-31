import React, { useState } from 'react'
import './style.css'
import { TextField, Button } from '@material-ui/core'

const Login = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const registerUser = async () => {
        const res = await fetch('http://localhost:1337/api/register', {
            method: 'POST',
            body: JSON.stringify({
               username,email, password 
            })
        }).then((t) => t.json())
        console.log(res);
    }
    return (
        <div className="form">
            <h1>Register</h1>
            <form className="register-fields">
                <TextField fullWidth placeholder="Username" label="Enter Username" value={username} onChange={e => setUsername(e.target.value)} variant="outlined" />
                <TextField fullWidth placeholder="you@email.com" label="Enter Email" value={email} onChange={e => setEmail(e.target.value)} variant="outlined" />
                <TextField fullWidth placeholder="passowrd" label="Password" value={password} onChange={e => setPassword(e.target.value)} variant="outlined" />
                <Button color="primary" variant="contained" onClick={registerUser}>Register</Button>
            </form>
        </div>
    )
}

export default Login
