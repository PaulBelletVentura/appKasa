import React, { useState } from 'react';
import '../styles/components/_collapse.scss';
import arrowcollapse from '../assets/arrowcollapse.png'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const [rotate, setRotate] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setRotate(!rotate);
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className={`collapse__title ${rotate ? 'rotate' : ''}`} onClick={handleToggle}>
        <h3>{title}</h3>
        <img src={arrowcollapse} alt="image de présentation" className="arrow"
            />
      </div>
      {isOpen && <div className="collapse__content">{content}</div>}
    </div>
  );
}

export default Collapse;





