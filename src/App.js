import React, { Component } from 'react'
import './App.css';
import LoginPage from './components/LoginPage';
import Main from "./components/Main"
import { TreeProvider } from "./components/TreeContext"
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
    render() {
        return (
            <TreeProvider>
                <LoginPage />
                <Main />
            </TreeProvider>
        )
    }
}
