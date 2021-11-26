import React from 'react'
import { Link } from 'react-router-dom';
import './RegisterHeader.css';
import { ReactComponent as FbLogo } from './assets/logo.svg';

function RegisterHeader() {
    return (
        <div className="Registerheader">
            <div className="Register_header__left">
                <Link to="/">
                    <FbLogo/>
                </Link>
            </div>
            <div className="Register_header__right">
                <Link to="/login">
                    <button className="Register_header__submit"><p>Log In</p></button>
                </Link>
            </div>
        </div>
    )
}

export default RegisterHeader
