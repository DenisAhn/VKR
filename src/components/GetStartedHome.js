import React from "react";
// import BannerBackground from "../Assets/home-banner-background.png";
import Terminator from "../Assets/T-3000.jpeg";
import Main from "../Assets/Main.png";
import Navbar from "./Navbar";
import Steps from "../Assets/Steps.png";
import { FiArrowRight } from "react-icons/fi";
import { Divider } from "@mui/material";


const GetStartedHome = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="get-started-primary-heading">
          Как Начать Работу с NeuroWeb:
          </h1>
          <p className="primary-text">
          Добро пожаловать в NeuroWeb - ваш проводник в мир передовых технологий и машинного обучения! На этой странице мы представляем вам подробный обзор того, как начать работу с нашей многофункциональной платформой. Здесь вы найдете шаг за шагом инструкции, позволяющие вам использовать все возможности NeuroWeb в полной мере. Независимо от вашего уровня опыта в области данных и машинного обучения, эта страница поможет вам быстро разобраться с основами и приступить к созданию потрясающих проектов. Погрузимся в увлекательный мир NeuroWeb и начнем!
          </p>
          <p className="primary-text">
          Шаги к Успеху
          </p>
          <a href="/">
            <button className="secondary-button">
              Перейти к выбору моделей <FiArrowRight />{" "}
            </button>
          </a>
        </div>
        <div className="home-image-section">
          <img src={Steps} alt="" className="get-started-img"/>
        </div>
      </div>
      <Divider className="divider" />
    </div>
  );
};

export default GetStartedHome;