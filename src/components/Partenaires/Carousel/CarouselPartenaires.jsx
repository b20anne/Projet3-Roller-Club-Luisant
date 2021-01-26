import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./CarouselPartenaires.css";
import axa from "./assets/AXA.PNG";
import Aviva from "./assets/AVIVA.jpg";
import Paris from "./assets/Paris.jpg";
import CAPTN from "./assets/CAPTN.png";
import Chapron from "./assets/Chapron.jpg";
import Luisant from "./assets/LUISANT.png";
import Mainvilliers from "./assets/MAINVILLIERS.png";

const responsive = {
  0: { items: 1 },
  420: { items: 2 },
  940: { items: 4 },
};

const objet = [
  <div className="item" data-value="1">
    <img src={axa} alt="" />
  </div>,
  <div className="item" data-value="2">
    <img src={Aviva} alt="" />
  </div>,
  <div className="item" data-value="3">
    <img src={Paris} alt="" />
  </div>,
  <div className="item" data-value="4">
    <img src={CAPTN} alt="" />
  </div>,
  <div className="item" data-value="5">
    <img src={Chapron} alt="" />
  </div>,
  <div className="item" data-value="6">
    <img src={Luisant} alt="" />
  </div>,
  <div className="item" data-value="7">
    <img src={Mainvilliers} alt="" />
  </div>,
];

const CarouselP = () => (
  <div className="CarouselPartenaires">
    <h1 className="Partenaires">Partenaires</h1>
    <AliceCarousel
      mouseTracking
      items={objet}
      responsive={responsive}
      autoPlay
      autoPlayInterval="3000"
      disableDotsControls
      disableButtonsControls
      infinite
    />
  </div>
);

export default CarouselP;
