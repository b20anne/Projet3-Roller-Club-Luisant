import React from "react";
import LogoTER from "./assets/TER.png";
import Logo1 from "./assets/FNCIDFF.png";
import Logo2 from "./assets/TOUTE.png";
import "./Toutes.scss";

const Toutes = () => {
  return (
    <div>
      <div className="LogoToutes">
        <img src={LogoTER} alt="TER" />
        <h1 className="TERH1">Toutes en Roller</h1>
      </div>
      <div className="TERDesc">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
          bibendum orci. Phasellus quis metus convallis, tempus ligula non,
          convallis nisl. Nulla facilisi. Nulla ultricies gravida leo, a posuere
          mi faucibus ut. Ut eu sem eget tellus vehicula rutrum eu quis mauris.
          Nam sit amet dolor ut odio hendrerit hendrerit in quis libero. Donec
          finibus eu ante et tincidunt. Duis tincidunt venenatis nisl id ornare.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Duis at mi turpis. Duis feugiat imperdiet
          enim, id viverra velit egestas eu. Vestibulum posuere faucibus
          accumsan.
        </p>
      </div>
      <div className="TERRoll">
        <div className="Roll1">
          <p>Carte1</p>
        </div>
        <div className="Roll2">
          <p>Carte2</p>
        </div>
        <div className="Roll3">
          <p>Carte3</p>
        </div>
      </div>
      <div className="TERLogos">
        <img src={Logo1} alt="FNCIDFF" />
        <img src={Logo2} alt="Toutes" />
      </div>
    </div>
  );
};

export default Toutes;
