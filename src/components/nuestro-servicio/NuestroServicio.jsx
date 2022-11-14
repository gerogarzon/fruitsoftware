import React from "react";

import digitabilidad from '../../assets/digitabilidad.png';
import portabilidad from '../../assets/portabilidad.png';
import gestion from '../../assets/gestion.png';
import personalizacion from '../../assets/personalizacion.png';
import seguridad from '../../assets/seguridad.png';
import optimizacion from '../../assets/optimizacion.png';

import "./nuestroservicio.css";

const NuestroServicio = () => {
  return (
    
    <div className="container-fluid p-0 text-center">
      <div className="title-styles pt-5">Nuestro Servicio</div>
      <div className="subtitle-styles pt-2">Desde 2019 hasta hoy</div>
      <div className="text-styles pt-2 mx-5">
        Somos Fruit Software™ y tenemos como misión brindar un sistema –
        software de gestión, moderno y fácil de usar, hecho a medida para el
        mercado mayorista y minorista frutihortícola. Este sistema cuenta con
        una versión de aplicación móvil que puede ser personalizable por cada
        cliente con su propia marca, añadiendo valor a su negocio, afianzando y
        reforzando el vínculo con los clientes, como también mejorando sus
        experiencias.
      </div>
      <div className="title-styles pt-5">
        Olvidate ya de gestionar todo con papel y lápiz
      </div>
      <div className="subtitle-styles pt-2">
        Software moderno y sencillo de usar
      </div>
      <div className="text-styles pt-2 mx-5">
        Siendo tecnología de última generación, Fruit Software™ logra de manera
        rápida y eficaz la gestión de tu negocio desde cualquier lugar y desde
        cualquier dispositivo conectado a la red. Podrás cargar pedidos,
        controlar y reponer stock, facturar, revisar saldos en tus
        cuentascorrientes y mucho más.
      </div>

      <div className="funciones">

      <div className="subtitle-styles-2 p-5 m-0">FUNCIONALIDADES DEL SOFTWARE</div>
      <div className="d-flex justify-content-center">
        <div className="divider"></div>
      </div>
      <div className="title-styles p-4 mb-4">
        Nosotros nos ocupamos de la tecnología
      </div>

    <div className="row gx-5 align-items-center justify-content-center">

    
      <div className="col-md-3 col-sm-10 card d-flex justify-content-center align-items-center">
        <img src={digitabilidad} style={{maxWidth: "150px", maxHeight:'150px'}} class="card-img-top card-image" alt="digitabilidad" />
        <div className="card-body">
          <div className="subtitle-styles p-1">Digitalidad</div>
          <p className="card-text text-styles p-2">
          Integrá la tecnología para crear nuevas experiencias en relación al mercado
          </p>
        </div>
      </div>

      <div className="col-md-3 col-sm-10 card d-flex justify-content-center align-items-center">
        <img src={portabilidad} style={{maxWidth: "150px", maxHeight:'150px'}} className="card-img-top card-image" alt="portabilidad" />
        <div className="card-body">
          <div className="subtitle-styles p-1">Portabilidad</div>
          <p className="card-text text-styles p-2">
          Ingresá desde cualquier lugar. El sistema es compatible y adaptable a todos los dispositivos de hoy en día
          </p>
        </div>
      </div>

      <div className="col-md-3 col-sm-10 card d-flex justify-content-center align-items-center">
        <img src={gestion} style={{maxWidth: "150px", maxHeight:'150px'}} className="card-img-top card-image" alt="gestion" />
        <div className="card-body">
          <div className="subtitle-styles p-1">Gestión en Tiempo Real</div>
          <p className="card-text text-styles p-2">
          Total libertad del usuario de gestionar en tiempo real pedidos y compras, contorlar stock, revisar saldos, etc.
          </p>
        </div>
      </div>

      </div>

      <div className="row gx-5 align-items-center justify-content-center">

      <div className="col-md-3 col-sm-10 card d-flex justify-content-center align-items-center">
        <img src={personalizacion} style={{maxWidth: "150px", maxHeight:'150px'}} className="card-img-top card-image" alt="gestion" />
        <div className="card-body">
          <div className="subtitle-styles p-1">Personalización</div>
          <p className="card-text text-styles">
          Personalizá la app para que tenga tu propia marca y así añadir valor a tu negocio 
          </p>
        </div>
      </div>

      <div className="col-md-3 col-sm-10 card d-flex justify-content-center align-items-center">
        <img src={seguridad} style={{maxWidth: "150px", maxHeight:'150px'}} className="card-img-top card-image" alt="gestion" />
        <div className="card-body">
          <div className="subtitle-styles p-1">Seguridad y Fiabilidad</div>
          <p className="card-text text-styles p-2">
          Tus datos y operaciones se registran en la base de datos del software de manera privada y segura
          </p>
        </div>
      </div>

      <div className="col-md-3 col-sm-10 card d-flex justify-content-center align-items-center">
        <img src={optimizacion} style={{maxWidth: "150px", maxHeight:'150px'}} className="card-img-top" alt="gestion" />
        <div className="card-body">
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
