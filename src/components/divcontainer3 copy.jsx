import React from 'react';
import { useParams } from 'react-router-dom';
import '../app.scss';
import Collapse from "../components/collapse.jsx";
import div3collapse from '../app.json';
import '../styles/components/_collapse.scss';
import '../styles/components/_div3.scss'

function getContent(title) {
  const data = div3collapse[0];

  switch (title) {
    case "description":
      return data.description;
    case "equipments":
      return (
        <ul className="equipment-list">
          {data.equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        </ul>
      );
    default:
      console.log("default");
      break;
  }
}


function Aproposdata() {
  return (
    <div className="div3">
      <div className="div3-collapse">
        <Collapse title={<h2 className="collapse-title">Description!</h2>} content={getContent("description")} />
        <Collapse title={<h2 className="collapse-title">Équipements</h2>} content={getContent("equipments")} />
      </div>
    </div>
  );
}


export default Aproposdata;
