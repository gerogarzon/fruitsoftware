import React from "react";

import digitabilidad from "../../assets/digitabilidad.png";
import portabilidad from "../../assets/portabilidad.png";
import gestion from "../../assets/gestion.png";
import personalizacion from "../../assets/personalizacion.png";
import seguridad from "../../assets/seguridad.png";
import optimizacion from "../../assets/optimizacion.png";

import "./nuestroservicio.css";

const NuestroServicio = () => {
  return (
    <div id="nuestroservicio" className="container-fluid p-0 text-center">
      <div className="px-5">
        <h2 className="title-styles pt-3">Nuestro Servicio</h2>
        <h3 className="subtitle-styles pt-1">Desde 2019 hasta hoy</h3>
        <p className="text-styles pt-1 ">
          Somos Fruit Software™ y tenemos como misión brindar un sistema –
          software de gestión, moderno y fácil de usar, hecho a medida para el
          mercado mayorista y minorista frutihortícola. Este sistema cuenta con
          una versión de aplicación móvil que puede ser personalizable por cada
          cliente con su propia marca, añadiendo valor a su negocio, afianzando
          y reforzando el vínculo con los clientes, como también mejorando sus
          experiencias.
        </p>
        <h2 className="title-styles pt-3">
          Olvidate ya de gestionar todo con papel y lápiz
        </h2>
        <h3 className="subtitle-styles pt-1">
          Software moderno y sencillo de usar
        </h3>
        <p className="text-styles pt-1">
          Siendo tecnología de última generación, Fruit Software™ logra de
          manera rápida y eficaz la gestión de tu negocio desde cualquier lugar
          y desde cualquier dispositivo conectado a la red. Podrás cargar
          pedidos, controlar y reponer stock, facturar, revisar saldos en tus
          cuentascorrientes y mucho más.
        </p>
      </div>

      <div className="funciones">
        <h2 className="subtitle-styles-2 p-5 m-0">
          FUNCIONALIDADES DEL SOFTWARE
        </h2>
        <div className="d-flex justify-content-center">
          <div className="divider"></div>
        </div>
        <h3 className="title-styles pt-5 px-3 mb-2">
          Nosotros nos ocupamos de la tecnología
        </h3>

        <div className="row align-items-center justify-content-center">
          <div className="col-md-3 col-sm-10 card d-flex justify-content-center align-items-center">
            <img
              src={digitabilidad}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
              className="card-img-top card-image flex-grow-1"
              alt="digitabilidad"
            />
            <div className="card-body flex-grow-1">
              <div className="subtitle-styles p-1">Digitalidad</div>
              <p className="card-text text-styles p-2">
                Integrá la tecnología para crear nuevas experiencias en relación
                al mercado
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-10 card d-flex justify-content-center align-items-center">
            <img
              src={portabilidad}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
              className="card-img-top card-image flex-grow-1"
              alt="portabilidad"
            />
            <div className="card-body flex-grow-1">
              <div className="subtitle-styles p-1">Portabilidad</div>
              <p className="card-text text-styles p-2">
                Ingresá desde cualquier lugar. El sistema es compatible y
                adaptable a todos los dispositivos de hoy en día
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-10 card d-flex justify-content-center align-items-center">
            <img
              src={gestion}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
              className="card-img-top card-image flex-grow-1"
              alt="gestion"
            />
            <div className="card-body flex-grow-1">
              <div className="subtitle-styles p-0">Gestión en Tiempo Real</div>
              <p className="card-text text-styles p-2">
                Total libertad del usuario de gestionar en tiempo real pedidos y
                compras, contorlar stock, revisar saldos, etc.
              </p>
            </div>
          </div>
        </div>

        <div className="row gx-5 align-items-center justify-content-center">
          <div className="col-md-3 col-sm-10 card d-flex justify-content-center align-items-center">
            <img
              src={personalizacion}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
              className="card-img-top card-image flex-grow-1"
              alt="gestion"
            />
            <div className="card-body flex-grow-1">
              <div className="subtitle-styles p-1">Personalización</div>
              <p className="card-text text-styles">
                Personalizá la app para que tenga tu propia marca y así añadir
                valor a tu negocio
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-10 card d-flex justify-content-center align-items-center">
            <img
              src={seguridad}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
              className="card-img-top card-image flex-grow-1"
              alt="gestion"
            />
            <div className="card-body flex-grow-1">
              <div className="subtitle-styles p-1">Seguridad y Fiabilidad</div>
              <p className="card-text text-styles p-2">
                Tus datos y operaciones se registran en la base de datos del
                software de manera privada y segura
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-10 card d-flex justify-content-center align-items-center">
            <img
              src={optimizacion}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
              className="card-img-top card-image flex-grow-1"
              alt="gestion"
            />
            <div className="card-body flex-grow-1">
              <div className="subtitle-styles p-1">Optimización</div>
              <p className="card-text text-styles p-2">
                Optimizá recursos humanos, trabajo y tu tiempo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuestroServicio;
