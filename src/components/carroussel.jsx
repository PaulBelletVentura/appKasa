import { useState } from 'react';
import { useParams } from 'react-router-dom';
import appData from '../app.json';
import '../styles/components/_carroussel.scss';
import arrowleft from '../assets/arrowleft.png';
import arrowright from '../assets/arrowright.png';

const Carroussel = function() {
  const { id } = useParams();
  const ficheData = appData.find(function(fiche) {
    return fiche.id === id;
  });

  let pictures = null;
  if (ficheData && ficheData.pictures) {
    pictures = ficheData.pictures;
  }

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  function leftSlide() {
    setCurrentSlideIndex(prevIndex => (prevIndex - 1 + pictures.length) % pictures.length);
  }

  function rightSlide() {
    setCurrentSlideIndex(prevIndex => (prevIndex + 1) % pictures.length);
  }

  if (!pictures) {
    return null; 
  }

  return (
    <div className="banner">
      <div className="slide">
        {pictures.map(function(picture, index) {
          return (
            <img
              key={index}
              src={picture}
              alt={`Slide ${index}`}
              style={{ display: index === currentSlideIndex ? 'block' : 'none' }}
            />
          );
        })}
      </div>

      <div className="arrow_left" onClick={leftSlide}>
        <img src={arrowleft} alt="Fleche de gauche" />
      </div>
      <div className="arrow_right" onClick={rightSlide}>
        <img src={arrowright} alt="Fleche de droite" />
      </div>
    </div>
  );
};

export default Carroussel;
