import React from 'react'
import logo from "../logo.svg";
import '../index.css'
import { GiHamburgerMenu } from 'react-icons/all'

function Header() {
    let navTriggerHandler = () => {
        document.querySelector('.sidebar').classList.toggle('show');
    }
    return (
        <header className="App-header">
            <div className="nav-trigger" onClick={navTriggerHandler}>
                <GiHamburgerMenu />
            </div>
            <div className="logo-container">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>SmartCow</h1>
            </div>
        </header>
    )
}

export default Header
