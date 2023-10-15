// https://react-slick.neostack.com/docs/example/multiple-items
import React, { Component } from "react";
import Slider from "react-slick";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Terminator from "../Assets/T-3000.jpeg";
import Plus from "../Assets/plus.svg"
import CV from "../Assets/CV.png"
import NLP from "../Assets/NLP.png"
import Classical from "../Assets/Classical.png"
import D3 from "../Assets/3D.png"
import soon from "../Assets/soon.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "red" }}
    //   onClick={onClick}
    // >
    //   <FiArrowRight/>{" "}
    // </div>
    <ArrowForwardIosIcon className={className} onClick={onClick} style={{ ...style, display: "block", color: "4285F4" }} />

  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "green" }}
    //   onClick={onClick}
    // />
    <ArrowBackIosNewIcon className={className} onClick={onClick} style={{ ...style, display: "block", color: "4285F4" }} />
  );
}


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img src={CV} className="slider-img" />
            <h3 className="slider-primary-text">Компьютерное зрение</h3>
            <p className="slider-text">
              Исследуйте мир через глаза искусственного интеллекта с помощью нашего мощного модуля компьютерного зрения. От классификации изображений до распознавания лиц и поз — NeuroWeb дает вам возможность проводить сложные анализы визуальных данных. Загрузите свои изображения, обучите модель и проверьте ее работоспособность в режиме предпросмотра.
              <br /><br />
            </p>
            <a href="/cv">
              <button className="slider-button">Подробнее</button>
            </a>
          </div>
          <div>
            <img src={NLP} className="slider-img" />
            <h3 className="slider-primary-text">NLP</h3>
            <p className="slider-text">
              Дайте вашим данным голос с помощью мощного модуля обработки естественного языка (NLP) в NeuroWeb. Наша платформа позволяет вам распознавать звуки, а также создавать синтезированную речь. Загрузите аудиофайлы для анализа и обработки, обучите модель и проверьте ее работоспособность в режиме предпросмотра.
               <br /><br /><br />
            </p>
            <a href="/nlp">
              <button className="slider-button">Подробнее</button>
            </a>
          </div>
          <div>
            <img src={Classical} className="slider-img" />
            <h3 className="slider-primary-text">Классические модели</h3>
            <p className="slider-text">
              Используйте мощные алгоритмы классического машинного обучения в NeuroWeb для предсказания значений в вашей таблице данных. Проводите продвинутый анализ данных и визуализацию метрик для более глубокого понимания ваших данных. Загрузите свои данные, обучите модель и проверьте ее работоспособность в режиме предпросмотра.
              <br /><br />
            </p>
            <button className="slider-button">Подробнее</button>
          </div>
          <div>
            <img src={D3} className="slider-img" />
            <h3 className="slider-primary-text">3D Модели</h3>
            <p className="slider-text">
            Раскройте свой потенциал в трехмерном искусстве с помощью наших мощных моделей машинного обучения. NeuroWeb предлагает инновационные подходы к работе с 3D графикой, позволяя вам создавать потрясающие трехмерные объекты и сцены. Наши алгоритмы адаптированы специально для обработки и анализа трехмерных данных, открывая новые горизонты для художников и дизайнеров.
            </p>
            <button className="slider-button">Подробнее</button>
          </div>
          <div>
            <img src={soon} className="slider-img" />
            <p className="slider-text">
              Скоро появится обновление
            </p>
          </div>
          <div>

          </div>
        </Slider>
      </div>
    );
  }
}
