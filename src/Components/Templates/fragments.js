import React from 'react'

export const Navbar = props => {
    return (
        <nav id={'navbar'} className={props.role}>
            <p>Links will go here.</p>
        </nav>
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
            <p>This is the Footer func.</p>
        </footer>
    );
};

