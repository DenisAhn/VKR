// https://react-slick.neostack.com/docs/example/multiple-items
import React, { Component } from "react";
import Slider from "react-slick";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FaceRecognition from "../Assets/face-recognition.jpeg"
import Classification from "../Assets/classification.png"
import Poses from "../Assets/poses.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon className={className} onClick={onClick} style={{ ...style, display: "block", color: "4285F4" }} />

  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosNewIcon className={className} onClick={onClick} style={{ ...style, display: "block", color: "4285F4" }} />
  );
}


export default class CVSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="cv-home-banner-container">
            <div className="cv-home-image-section">
              <img src={Classification} className="slider-img" />
            </div>
            <div className="cv-home-text-section">
              <h3 className="slider-primary-text">Классификация изображений</h3>
              {/* <p className="slider-secondary-text">Загрузите и Категоризуйте Данные</p> */}
              <p className="cv-slider-text">
                Модель классификации изображений в NeuroWeb представляет собой мощный инструмент для автоматического распознавания и категоризации объектов на изображениях. Она обучена анализировать визуальные данные и присваивать им соответствующие метки или классы.
              </p>
              <button className="cv-slider-button">Попробовать</button>
            </div>
          </div>
          <div className="cv-home-banner-container">
            <div className="cv-home-image-section">
              <img src={FaceRecognition} className="cv-slider-img" />
            </div>
            <div className="cv-home-text-section">
              <h3 className="slider-primary-text">Распознавание лиц</h3>
              <p className="cv-slider-text">
                Модель распознавания лиц в NeuroWeb представляет собой инструмент для автоматического анализа и идентификации лиц на изображениях или видео. Эта модель обучена точно определять особенности лица и при необходимости идентифицировать конкретного человека.
              </p>
              <button className="cv-slider-button">Попробовать</button>
            </div>
          </div>
          <div className="cv-home-banner-container">
            <div className="cv-home-image-section">
              <img src={Poses} className="slider-img" />
            </div>
            <div className="cv-home-text-section">
              <h3 className="slider-primary-text">Позы</h3>
              <p className="cv-slider-text">
                Модель распознавания поз в NeuroWeb представляет собой инструмент для автоматического анализа и интерпретации поз человека на изображениях или видео. Она способна точно определить положение тела и конечностей, что делает её важным инструментом для анализа движений и действий.
              </p>
              <button className="cv-slider-button">Попробовать</button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
