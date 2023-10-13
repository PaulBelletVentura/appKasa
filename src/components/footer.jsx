import React from 'react';
import '../styles/components/footer.scss';
import logoFooter from "../assets/logokasablanc.png";

function Footer() {
  return (
    <footer className="footer">
    <img src={logoFooter} alt="" className="footer_logo" />
    <p className="footer_texte">
      &copy;
      2023 Kasa. All rights reserved
    </p>
  </footer>
  );
}

export default Footer;
