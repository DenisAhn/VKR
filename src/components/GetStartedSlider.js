// https://react-slick.neostack.com/docs/example/multiple-items
import React, { Component } from "react";
import Slider from "react-slick";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Step_1 from "../Assets/step-1.svg";
import Step_2 from "../Assets/step-2.svg";
import Step_3 from "../Assets/step-3.png";
import Step_4 from "../Assets/step-4.svg";
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


export default class GetStartedSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
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
            <img src={Step_1} className="get-started-slider-img" />
            <h3 className="slider-primary-text">1 Шаг.</h3>
            <p className="slider-secondary-text">Загрузите и Категоризуйте Данные</p>
            <p className="get-started-slider-text">
              Начните с загрузки данных, которые требуется анализировать. Эти данные могут представлять собой изображения, видео или другие визуальные материалы. Для более точного анализа разделите их на различные категории или классы. Например, если у вас есть набор изображений с разными типами объектов, вы можете создать категории для каждого типа.
            </p>
          </div>
          <div>
            <img src={Step_2} className="get-started-slider-img" />
            <h3 className="slider-primary-text">2 Шаг.</h3>
            <p className="slider-secondary-text">Обучите Модель</p>
            <p className="get-started-slider-text">
              После того как данные загружены и разделены, нажмите кнопку "Обучить". Этот шаг запускает процесс обучения нейронной сети на предоставленных данных.
              Подождите, пока процесс обучения завершится. В этот момент модель адаптируется к предоставленным данным и начинает учиться распознавать и классифицировать объекты.
            </p>
          </div>
          <div>
            <img src={Step_3} className="slider-img" />
            <h3 className="slider-primary-text">3 Шаг.</h3>
            <p className="slider-secondary-text">Посмотрите Предварительные Результат</p>
            <p className="get-started-slider-text">
              После завершения обучения, вы сможете оценить первичные результаты работы модели. Посмотрите, насколько точно она распознает объекты в ваших данных. <span>      </span>
              <br />
              <br />
              <br />
            </p>
          </div>
          <div>
            <img src={Step_4} className="slider-img" />
            <h3 className="slider-primary-text">4 Шаг.</h3>
            <p className="slider-secondary-text">Экспортируйте Модель (по необходимости)</p>
            <p className="get-started-slider-text">
              В случае, если вам нужно использовать обученную модель вне платформы, вы можете экспортировать её. Это позволит вам интегрировать модель в другие приложения или системы.
              <br />
              <br />
              <br />
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
