import React from 'react';
import appData from '../app.json';
import { useParams } from 'react-router-dom';
import '../styles/components/_div1.scss';
import fullStar from '../assets/etoilepleine.png';
import emptyStar from '../assets/etoilevide.png';

function Div1() {
  const { id } = useParams();
  const ficheData = appData.find((fiche) => fiche.id === id);

  if (!ficheData) {
    return <div>La fiche avec l'ID {id} n'existe pas.</div>;
  }

  const { title, location, host, rating, tags } = ficheData;
  const { name, picture } = host;

  return (
    <div className="divtop">
      <div className="div1">
        <div className="div1-left">
          <h1>{title}</h1>
          <p>{location}</p>
        </div>
        <div className="div1-right">
          {tags && (
            <ul>
              {tags.map((tag, index) => (
                <p key={index} className="tag-style">
                  {tag}
                </p>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="div2">
        <div className="div2-left">
          {rating && (
            <div className="rating">
              {Array.from({ length: 5 }, (_, index) => (
                <img
                  key={index}
                  className="star"
                  src={index < rating ? fullStar : emptyStar}
                  alt={index < rating ? 'full-star' : 'empty-star'}
                />
              ))}
            </div>
          )}
        </div>
        <div className="div2-right">
          <p>{name}</p>
          <img src={picture} alt="Host" />
        </div>
      </div>
    </div>
  );
}

export default Div1;

