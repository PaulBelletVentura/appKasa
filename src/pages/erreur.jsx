import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header.jsx';
import '../app.scss';
import '../styles/components/_erreur.scss'

function Erreur() {
  return (
    <div className="container">
      <Header />
      <h1 className="erreur-titre">404</h1>
      <p className='erreur-texte'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="link">Retourner à l'accueil</Link>
      
    </div>
  );
}

export default Erreur;
