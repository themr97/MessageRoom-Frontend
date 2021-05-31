import React, { useState } from 'react'
import './style.css'
import { TextField, Button } from '@material-ui/core'
import { apiCall } from '../../utility'

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const registerUser = async () => {
        const res = await apiCall('/api/register', {username, email, password})
        console.log(res);
    }
    return (
        <div className="form">
            <h1>Register</h1>
            <form className="register-fields">
                <TextField fullWidth placeholder="Username" label="Enter Username" value={username} onChange={(e: any) => setUsername(e.target.value)} variant="outlined" />
                <TextField fullWidth placeholder="you@email.com" label="Enter Email" value={email} onChange={(e: any) => setEmail(e.target.value)} variant="outlined" />
                <TextField fullWidth placeholder="passowrd" label="Password" value={password} onChange={(e: any) => setPassword(e.target.value)} variant="outlined" />
                <Button color="primary" variant="contained" onClick={registerUser}>Register</Button>
            </form>
        </div>
    )
}

export default Register
