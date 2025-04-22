import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>GUY SIMPSON</h1>
      <nav>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          About Me
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>
          Portfolio
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contact
        </NavLink>
        <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>
          Resume
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;