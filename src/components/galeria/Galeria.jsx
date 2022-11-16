import React from "react";
import "./galeria.css";

import puesteros from "../../assets/puesteros.jpg";
import puesteros2 from "../../assets/puesteros2.jpg";
import puesteros3 from "../../assets/puesteros3.jpg";

const Galeria = () => {
  return (
    <div id="galeria" className="container-fluid p-2 galeria text-center">
        <div className="clientes-subtitle-styles m-0">
       MIRA NUESTRA GALERIA
      </div>
      <div className="d-flex justify-content-center">
        <div className="divider"></div>
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide  carousel-dark p-5 my-1"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active"> 
          <div className="d-flex justify-content-center">
            <img src={puesteros} className="galeria-images" alt="..." />
          </div>
          </div>
          <div className="carousel-item">
          <div className="d-flex justify-content-center">
            <img src={puesteros2} className="galeria-images" alt="..." />
          </div>
          </div>
          <div className="carousel-item">
          <div className="d-flex justify-content-center">
            <img src={puesteros3} className="galeria-images" alt="..." />
          </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Galeria;
