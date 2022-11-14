import React from "react";

import "./clientes.css";
import veglia from "../../assets/veglia.png";
import arcoiris from "../../assets/arcoiris.png";
import veliz from "../../assets/veliz.png";

const Clientes = () => {
    return (
        <div className="container-fluid text-center">
            <div className="subtitle-styles-2">
                CLIENTES QUE USAN NUESTRO SOFTWARE
            </div>
            <div
                id="carouselExampleControls"
                className="carousel carousel-dark slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner d-flex justify-content-center align-content-center">
                    <div className="carousel-item active">
                        <img src={veglia} className="d-block" alt="clientes" />
                    </div>
                    <div className="carousel-item">
                        <img src={arcoiris} className="d-block" alt="clientes" />
                    </div>
                    <div className="carousel-item">
                        <img src={veliz} className="d-block " alt="clientes" />
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
