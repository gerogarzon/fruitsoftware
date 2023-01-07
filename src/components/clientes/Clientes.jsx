import React from "react";

import "./clientes.css";
import veglia from "../../assets/veglia.png";
import arcoiris from "../../assets/arcoiris.png";
import veliz from "../../assets/veliz.png";
import line from "../../assets/carousel-line.png";

const Clientes = () => {
  return (
    <div id="clientes" className="container-fluid text-center">
      <div className="clientes-subtitle-styles">
        CLIENTES QUE USAN NUESTRO SOFTWARE
      </div>
      <div className="d-flex justify-content-center">
        <div className="divider"></div>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide p-5 mt-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={veglia} className="clientes-images" alt="clientes" />
            <div className="d-flex justify-content-center p-4">
              <img src={line} className="line-image" alt="line" />
            </div>
            <div className="text-center carousel-text-light p-1">
              Desde 2020 trabajamos con el sistema y la app de Fruit Software y
              es todo un éxito. Agilizamos nuestra gestión de pedidos y
              despachos de producto.
            </div>
            <div className="text-center carousel-text-bold p-1">
              Pedro Veglia, Fundador & CEO, PV Frutas & Hortalizas.
            </div>
          </div>
          <div className="carousel-item">
            <img src={arcoiris} className="clientes-images" alt="clientes" />
            <div className="d-flex justify-content-center p-4">
              <img src={line} className="line-image" alt="line" />
            </div>
            <div className="text-center carousel-text-light p-1">
              Desde que comenzamos a utilizar FruitSoftware el negocio ha
              mejorado enormemente y los clientes estan muy contentos.
              Recomendaría este software a cualquier otro empresario que busque
              una solución de gestión efectiva.
            </div>
            <div className="text-center carousel-text-bold p-1">
              Angel, Gerente, Arcoiris Frutas & Verduras
            </div>
          </div>
          <div className="carousel-item">
            <img src={veliz} className="clientes-images" alt="clientes" />
            <div className="d-flex justify-content-center p-4">
              <img src={line} className="line-image" alt="line" />
            </div>
            <div className="text-center carousel-text-light p-1">
              Con Fruit Software ahorramos tiempo en tareas administrativas,
              tengo toda la información y resultados del negocio en mi celular y
              además mejoró la experiencia de compra de nuestros clientes al
              tener nuestra propia App de pedidos.
            </div>
            <div className="text-center carousel-text-bold p-1">
              Damian Veliz, Co-Fundador, Veliz seleccion de Frutas & Hortalizas.
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
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
          data-bs-target="#carouselExampleControls"
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

export default Clientes;
