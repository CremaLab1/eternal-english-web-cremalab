import React from "react";
import WhatsAppLogo from "../../assets/whatsapp-logo.png";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <a
      className="whatsappButton"
      href="https://api.whatsapp.com/send?phone=5218132397196&text=Hola%20me%20gustaria%20agendar%20una%20conusulta"
      target="_blank"
    >
      <img src={WhatsAppLogo} alt="WhatsApp Logo" />
    </a>
  );
};

export default WhatsAppButton;
