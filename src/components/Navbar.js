import React from 'react';
import NavList from './NavList';

const Navbar = () => {
    const navListItems = ['Linear Equation', 'Solve for x', 'Quadratic Equation', 'Other'];

    return (
        <nav className="navbar navbar-expand-md shadow-sm">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">
                    <img src="./images/logo.svg" width="60" height="60" className="d-inline-block align-text-bottom" />
                    <span className="fs-1 text-light">Pizza Math</span>
                </a>
                <div>
                    <NavList list={navListItems} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;