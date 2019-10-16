import React from 'react'
import { NavLink, Link } from "react-router-dom";

export const Navbar = props => {
    return (
        <div className="ui container">
            <nav id={'navbar'} className={`${props.role} ui secondary menu`}>
                <Link to={'/home'} className={'item'}>LOGO HERE</Link>
                <NavLink to={'/features'} className={'item'}>Features</NavLink>
                <NavLink to={'/contact'} className={'item'}>Contact</NavLink>
                <div className="right menu">
                    <NavLink to={'/signin'} className={'item'}>Sign in</NavLink>
                    <NavLink to={'/register'} className={'item'}>Register</NavLink>
                </div>
            </nav>
        </div>
    );
};

export const Header = props => {
    return (
        <header id="header" className={props.role}>
            <Navbar role={props.role} />
        </header>
    );
};

export const Footer = props => {
    return (
        <footer id="footer" className={props.role}>
            <div className="ui container">
                <p>This is the Footer func.</p>
            </div>
        </footer>
    );
};

