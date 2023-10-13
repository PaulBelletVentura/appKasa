import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/accueil';
import Aproposdata from './pages/apropos';
import Erreur from './pages/erreur';
import Fiche from './pages/fiche';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<Aproposdata />} />
        <Route path="/fiche/:id" element={<Fiche />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

