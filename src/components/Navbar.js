import React from 'react';
import NavList from './NavList';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md shadow-sm bg-light">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">
                    <span className="fs-1 text-dark">Equation Solver</span>
                </a>
                <div>
                    <NavList />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;