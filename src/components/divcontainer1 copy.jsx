import React from 'react';
import appData from '../app.json';
import { useParams } from 'react-router-dom';
import '../styles/components/_div1.scss'

function Div1() {
  const { id } = useParams(); 

 
  const ficheData = appData.find((fiche) => fiche.id === id);

  
  if (!ficheData) {
    return <div>La fiche avec l'ID {id} n'existe pas.</div>;
  }

  
  const { title, location, host } = ficheData;
  const { name, picture } = host;

  return (
    <div className="div1">
      <div className="div1-left">
        <h1>{title}</h1>
        <p>{location}</p>
      </div>
      <div className="div1-right">
        <p>{name}</p>
        <img src={picture} alt="Host" />
      </div>
    </div>
  );
}

export default Div1;

