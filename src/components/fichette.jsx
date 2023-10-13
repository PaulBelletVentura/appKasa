import React from 'react';

function Fichettes({ image, title }) {
  return (
    <div className="fichettes">
      <img src={image} alt="image de présentation" className="fichettes_img" />
      <h2 className="fichettes_title">{title}</h2>
    </div>
  );
}

export default Fichettes;
