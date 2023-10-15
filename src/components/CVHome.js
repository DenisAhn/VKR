import React from "react";
// import BannerBackground from "../Assets/home-banner-background.png";
import Terminator from "../Assets/T-3000.jpeg";
import CV from "../Assets/CV-CV.png";
import Navbar from "./Navbar";
import Steps from "../Assets/Steps.png";
import { FiArrowRight } from "react-icons/fi";
import { Divider } from "@mui/material";


const CVHome = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="get-started-primary-heading">
          Компьютерное зрение
          </h1>
          <p className="primary-text">
          Наши модели компьютерного зрения способны автоматически распознавать объекты на изображениях, что делает их идеальными для задач классификации и анализа.
Мы предоставляем средства для обнаружения и отслеживания объектов на видео, что позволяет анализировать их движение и поведение.
Наш интуитивно понятный интерфейс позволяет пользователям всех уровней опыта работать с визуальными данными легко и эффективно.
          </p>
          <p className="primary-text">
          Доступные модели представлены ниже
          </p>
        </div>
        <div className="cv-home-image-section">
          <img src={CV} alt="" className="cv-home-img"/>
        </div>
      </div>
      <Divider className="divider" />
    </div>
  );
};

export default CVHome;