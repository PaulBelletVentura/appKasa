import React from 'react';
import { useParams } from 'react-router-dom';
import '../app.scss';
import Collapse from "../components/collapse.jsx";
import appData from '../app.json';
import '../styles/components/_collapse.scss';
import '../styles/components/_div3.scss';

function Div3() {
  const { id } = useParams();
  const ficheData = appData.find((fiche) => fiche.id === id);


  if (!ficheData) {
    return <div>La fiche avec l'ID {id} n'existe pas.</div>;
  }

  return (
    <div className="div3">
      <div className="div3-collapse">
        <Collapse title={<h2 className="collapse-title">Description</h2>} content={ficheData.description} />
        <Collapse
          title={<h2 className="collapse-title">Équipements</h2>}
          content={ficheData.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default Div3;
