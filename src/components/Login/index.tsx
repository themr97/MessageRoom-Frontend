import React, { useState } from 'react'
import './style.css'
import { TextField, Button } from '@material-ui/core'
import { apiCall } from '../../utility'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const loginUser = async () => {
        const res = await apiCall('/api/login', {username , password})
        console.log(res);

         if (res.status === 'ok') {

            // TODO:
            localStorage.setItem('token', res.data);
            alert("You are logged in");
        } else {
            alert(res.error);
        }
    }
    return (
        <div className="form">
            <h1>Login</h1>
            <form className="register-fields">
                <TextField fullWidth placeholder="Username" label="Enter Username" value={username} onChange={(e: any) => setUsername(e.target.value)} variant="outlined" />
                <TextField fullWidth placeholder="passowrd" label="Password" value={password} onChange={(e: any) => setPassword(e.target.value)} variant="outlined" />
                <Button color="primary" variant="contained" onClick={loginUser}>Login</Button>
            </form>
        </div>
    )
}

export default Login