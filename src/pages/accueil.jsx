import React from 'react';
import Header from '../components/header.jsx';
import Banner from '../components/banner.jsx';
import Content from '../components/content.jsx';
import '../app.scss';

function Accueil() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Content />
    </div>
  );
}

export default Accueil;
