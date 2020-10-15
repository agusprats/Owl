import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

const Login = () => {
    const signIn = () => {
        //  google login 

        auth.signInWithPopup(provider).catch((err) => alert(err.message))
    }
    return (
        <div className='login' >
            <div className="login__logo">
                <img src="./logo.png" alt="owl logo" />
                <h1>OWL CHAT</h1>
            </div>
            
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
