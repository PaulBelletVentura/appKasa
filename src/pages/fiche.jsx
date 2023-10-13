import React from 'react';
import Header from '../components/header.jsx';
import Carroussel from '../components/carroussel.jsx';
import DivContainer1 from '../components/divcontainer1.jsx';
import DivContainer3 from '../components/divcontainer3.jsx';
import Erreur from '../pages/erreur.jsx';
import { useParams } from 'react-router-dom';
import appData from '../app.json';

import '../app.scss';

function Fiche() {
  const { id } = useParams();
  const ficheData = appData.find((fiche) => fiche.id === id);


  if (!ficheData) {
    return <Erreur />;
  }

  return (
    <div className="container">
      <Header />
      <Carroussel />
      <DivContainer1 />
      <DivContainer3 />
    </div>
  );
}

export default Fiche;
