import React from 'react';
import Header from '../components/header.jsx';
import bannerapropos from '../assets/bannerapropos.png'
import '../app.scss';
import Collapse from "../components/collapse.jsx";
import apropos from '../aproposdata.js'
import '../styles/components/_collapse.scss';


function Aproposdata() {
 
  function getContent(title) {
    switch (title) {
      case "fiability":
        return apropos.fiabilite;
      case "respect":
        return apropos.respect;
      case "service":
        return apropos.service;
      case "sécurity":
        return apropos.securite;
      default:
        console.log("default");
        break;
    }
  }
  return (
    <div className="container">
      <Header />
      <div className="divbannerapropos">
        <img src={bannerapropos} className="bannerapropos" alt="banniere à propos" />
      </div>

      <div className="divaproposliste">
        <Collapse title="Fiabilité" content={getContent("fiability")} />
        <Collapse title="Respect" content={getContent("respect")} />
        <Collapse title="Service" content={getContent("service")} />
        <Collapse title="Sécurité" content={getContent("sécurity")} />
      </div>

    </div>
  );
}

export default Aproposdata;
