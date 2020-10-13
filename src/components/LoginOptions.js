import React from 'react'
import LoginButton from "./LoginButton"
import '../App.css';

export default function LoginOptions() {
    return (
        <div className="login_options">
            Welcome to myrelatives.site
            <div className="login_buttons">
                <LoginButton value="Login"/>
                <LoginButton value="Login with Facebook"/>
                <LoginButton value="Login with Google"/>
            </div>
            <div>
                <br/>
            </div>
        </div>
    )
}
