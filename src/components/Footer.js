import React from "react";
import Logo from "../Assets/Logo.jpg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Отдел качества</span>
          <span>Тех. поддержка</span>
          <span>Поделиться</span>
          <span>Вакансии</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>neuro@web.com</span>
          <span>neuro@web.com</span>
          <span>neuro@web.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Условия и положения</span>
          <span>Политика конфиденциальности</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;