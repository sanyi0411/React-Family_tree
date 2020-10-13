import React from 'react'
import '../App.css';
import { useAuth0 } from "@auth0/auth0-react"
import LoginOptions from './LoginOptions';
import LoginNavbar from './LoginNavbar';

export default function LoginPage() {
    const { isAuthenticated } = useAuth0()

    return (
        //!isAuthenticated && (
            <div className="login_page">
                <LoginNavbar />
                <LoginOptions />
            </div>
        //)
    )
}
