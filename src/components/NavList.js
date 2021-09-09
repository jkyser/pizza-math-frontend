import React from 'react';
import NavElement from './NavElement';

const NavList = () => {
    return (
        <ul className="navbar-nav">
            <NavElement />
            <NavElement />
            <NavElement />
            <NavElement />
        </ul>
    );
}

export default NavList;