import React from 'react';

const NavElement = ({item}) => {
    return (
        <li className="nav-item">
            <a className="nav-link fw-bold" href="#">{item}</a>
        </li>
    );
}

export default NavElement;