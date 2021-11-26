import React from 'react'
import { Link } from "react-router-dom";
import './LoginHeader.css';
import { ReactComponent as FbLogo } from './assets/logo.svg';

function LoginHeader() {
    return (
        <div className="Loginheader" style={{alignItems:"center"}}>
            <Link className="link" to="/">
                <FbLogo/>
            </Link>
        </div>
    )
}

export default LoginHeader
