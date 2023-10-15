import React from "react";
// import BannerBackground from "../Assets/home-banner-background.png";
import Terminator from "../Assets/T-3000.jpeg";
import Main from "../Assets/Main.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Divider } from "@mui/material";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            NeuroWeb
          </h1>
          <p className="primary-text">
          NeuroWeb - это многофункциональная веб-платформа, разработанная для тех, кто жаждет погрузиться в мир искусственного интеллекта и машинного обучения. Мы предлагаем удобный инструментарий, позволяющий работать с нейронными сетями в различных областях: от компьютерного зрения до обработки естественного языка и классического машинного обучения.
          </p>
          <p className="secondary-text">
            С инструментом справится даже новичок без навыков программирования.
          </p>
          <a href="/get-started">
            <button className="secondary-button">
              Начать <FiArrowRight />{" "}
            </button>
          </a>
        </div>
        <div className="home-image-section">
          <img src={Main} alt="" className="main-image"/>
        </div>
      </div>
      <Divider className="divider" />
    </div>
  );
};

export default Home;