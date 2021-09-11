import React from 'react';
import NavElement from './NavElement';

const NavList = ({list}) => {
    return (
        <ul className="navbar-nav">
            {list.map(item => <NavElement item={item} />)}
        </ul>
    );
}

export default NavList;