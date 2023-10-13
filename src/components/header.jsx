import React from 'react';
import logo from '../assets/logokasa.png';
import { Link } from 'react-router-dom';
import '../styles/components/_header.scss'

function Header() {
  return (
    <div className="header">
      <div className="logo-wrapper">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <div className="menu">
        <Link exact to="/" className="">Accueil</Link>
        <Link to="/a-propos" className="">A Propos</Link>
      </div>
    </div>
  );
}

export default Header;
