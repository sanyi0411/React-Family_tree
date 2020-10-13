import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import '../App.css';

const LoginButton = (props) => {
    const { loginWithRedirect, isAuthenticated } = useAuth0()

    return (
        !isAuthenticated && (
            <button className="login_button" onClick={() => {loginWithRedirect()}}>
                {props.value}
            </button>
        )
    )
}

export default LoginButton
