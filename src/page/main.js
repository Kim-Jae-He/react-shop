import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopHeader from "../components/header";
import NextImage from "../img/carousel/next.png";
import PrevImage from "../img/carousel/prev.png";
import DigitalShopImage from "../img/carousel/img_shop_digital.jpeg";
import FashionShopImage from "../img/carousel/img_shop_fashion.jpeg";
import GroceryShopImage from "../img/carousel/img_shop_grocery.jpeg";
import { NextCarousel } from "../styles/main.styles";

const Main = () => {
  const sliderRef = useRef(null);

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src={NextImage} alt="Next" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src={PrevImage} alt="Previous" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <TopHeader />
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          <div>
            <img src={DigitalShopImage} alt="Digital Shop" />
          </div>
          <div>
            <img src={FashionShopImage} alt="Fashion Shop" />
          </div>
          <div>
            <img src={GroceryShopImage} alt="Grocery Shop" />
          </div>
        </Slider>
        <NextArrow onClick={goToNextSlide} />
      </div>
    </>
  );
};

export default Main;
