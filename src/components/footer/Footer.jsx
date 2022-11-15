import React from "react";
import logo from "../../assets/footer-logo.png";
import wts from "../../assets/wts.png";
import linke from "../../assets/linke.png";
import face from "../../assets/face.png";
import insta from "../../assets/insta.png";

import "./footer.css";

const Footer = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row bg-particles text-center">
        <div className="footer-titles">
          <h4 className="footer-title-styles">
            Comenzá a transformar tu negocio para una mayor productividad.
          </h4>
          <h5 className="footer-subtitle-styles">
            Nosotros nos encargamos de la tecnología.
          </h5>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col green-col p-5">
            <div className="row align-items-center">
              <div className="col">
                <h5 className="text-white">
                  Revolucioná tu negocio conFruit Software™ <br></br> Desde hoy!
                </h5>
              </div>
              <div className="col">
                <button className="btn btn-outline-warning contacto text-white">
                  VER MAS
                </button>
              </div>
            </div>
          </div>
          <div className="col red-col p-5">
            <div className="row align-items-center">
              <div className="col">
                <h5 className="text-white">Mirá nuestra galería de fotos.</h5>
              </div>
              <div className="col">
                <button className="btn btn-outline-warning contacto text-white">
                  VER MAS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container-fluid p-5 m-0 footer text-white">
        <div className="row justify-content-center align-content-center">
          <div className="col-md-4 col-xs-12 p-0 py-2 d-flex flex-column justify-content-start align-content-center logo-block">
            <img src={logo} alt="logo" className="logo-vertical align-self-center" />
          </div>
          <div className="col-md-4 col-xs-12 p-0 d-flex flex-column justify-content-start align-content-center">
            <h4 className="footer-titles-2">LINKS RAPIDOS</h4>
            <a className="footer-subtitles" href="#sobrenosotros">SOBRE NOSOTROS</a>
            <a className="footer-subtitles" href="#nuestroservicio">NUESTRO SERVICIO</a>
            <a className="footer-subtitles" href="#clientes">CLIENTES</a>
            <a className="footer-subtitles" href="#galeria">GALERIA</a>
          </div>
          <div className="col-md-4 col-xs-12 p-0 d-flex flex-column justify-content-start align-content-start">
              <h4 className="footer-titles-2">Contacto</h4>
              <h5 className="footer-subtitles">Teléfono: <span className="span px-2">+54 9 381 506-5129</span></h5>
              <h5 className="footer-subtitles">Email: <span className="span px-2">info@fruitsoftware.com.ar</span></h5>
              <div className="row py-2 justify-content-start align-content-center m-0">
                <button type="button" className="footer-btn btn col p-0 me-3 d-flex justify-content-center align-content-center"><img className="d-flex justify-content-center align-content-center icons" src={wts} alt="whatsapp-logo"/></button>
                <button type="button" className="footer-btn btn col p-0 me-3 d-flex justify-content-center align-content-center"><img className="d-flex justify-content-center align-content-center icons" src={linke} alt="linkedin-logo"/></button>
                <button type="button" className="footer-btn btn col p-0 me-3 d-flex justify-content-center align-content-center"><img className="d-flex justify-content-center align-content-center icons" src={face} alt="facebook-logo"/></button>
                <button type="button" className="footer-btn btn col p-0 me-3 d-flex justify-content-center align-content-center"><img className="d-flex justify-content-center align-content-center icons" src={insta} alt="instagram-logo"/></button>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
