import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import './RegisterHeader.css';

function RegisterHeader() {
    return (
        <div className="Registerheader">
            <div className="Register_header__left">
                <Link to="/">
                    <img src="https://i.ibb.co/WzybLQK/del.png" alt="Facebook Logo" className="Register_header__logo" />
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
