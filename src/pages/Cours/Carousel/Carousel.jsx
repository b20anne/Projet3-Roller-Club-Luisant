import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.css";
import roller from "../../../components/assets/Roller.jpg";
import Roller1 from "../../../components/assets/Roller1.jpg";
import Roller2 from "../../../components/assets/Roller2.jpeg";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="item" data-value="1">
    <img src={roller} alt="" />
  </div>,
  <div className="item" data-value="2">
    <img src={Roller1} alt="" />
  </div>,
  <div className="item" data-value="3">
    <img src={Roller2} alt="" />
  </div>,
];

const Carousel = () => (
  <div className="AliceCarouselTitre">
    <h1 className="titreVertPhoto">Photos</h1>
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      autoPlay
      autoPlayInterval="2000"
      disableDotsControls
      disableButtonsControls
      infinite
    />
  </div>
);

export default Carousel;
