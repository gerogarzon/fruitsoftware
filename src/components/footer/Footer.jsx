import React from "react";
import logo from "../../assets/footer-logo.png";
import wts from "../../assets/wts.png";
import linke from "../../assets/linke.png";
import face from "../../assets/face.png";
import insta from "../../assets/insta.png";

import "./footer.css";

const Footer = () => {
  return (
    <div id="contacto" className="container-fluid p-0">
      <div className="row bg-particles text-center px-1 m-0">
        <div className="footer-titles">
          <h4 className="footer-title-styles px-2">
            Comenzá a transformar tu negocio para una mayor productividad.
          </h4>
          <h5 className="footer-subtitle-styles px-2">
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
                   <a className="vermas" href="#nuestroservicio">VER MAS</a>
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
                  <a className="vermas" href="#galeria">VER MAS</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container-fluid px-5 pt-5 m-0 footer text-white">
        <div className="row pb-3 justify-content-center align-content-center">
          <div className="col-md-4 col-xs-12 p-0 py-2 d-flex flex-column justify-content-start align-content-center logo-block">
            <img src={logo} alt="logo" className="logo-vertical align-self-center" />
          </div>
          <div className="footer-col col-md-4 col-xs-12 p-0 d-flex flex-column justify-content-start align-content-center">
            <h4 className="footer-titles-2">LINKS RAPIDOS</h4>
            <a className="footer-subtitles" href="#sobrenosotros">SOBRE NOSOTROS</a>
            <a className="footer-subtitles" href="#nuestroservicio">NUESTRO SERVICIO</a>
            <a className="footer-subtitles" href="#clientes">CLIENTES</a>
            <a className="footer-subtitles" href="#galeria">GALERIA</a>
          </div>
          <div className=" footer-col col-md-4 col-xs-12 p-0 d-flex flex-column justify-content-start align-content-start">
              <h4 className="footer-titles-2">CONTACTO</h4>
              <h5 className="footer-subtitles-2">Teléfono: <span className="span px-2">+54 9 381 506-5129</span></h5>
              <h5 className="footer-subtitles-2">Email: <span className="span px-2">info@fruitsoftware.com.ar</span></h5>
              <div className="row responsive-icons py-2 justify-content-start align-content-center m-0">
                <button type="button" className="footer-btn btn col p-0 me-3 d-flex justify-content-center align-content-center"><a href="https://api.whatsapp.com/send?phone=+5493815065129&text=Hola, me gustaria tener mas informacion, porfavor de contactarme!"><img className="d-flex justify-content-center align-content-center icons" src={wts} alt="whatsapp-logo"/></a></button>
                <button type="button" className="footer-btn btn col p-0 me-3 d-flex justify-content-center align-content-center"><img className="d-flex justify-content-center align-content-center icons" src={linke} alt="linkedin-logo"/></button>
                <button type="button" className="footer-btn btn col p-0 me-3 d-flex justify-content-center align-content-center"><img className="d-flex justify-content-center align-content-center icons" src={face} alt="facebook-logo"/></button>
                <button type="button" className="footer-btn btn col p-0 me-3 d-flex justify-content-center align-content-center"><img className="d-flex justify-content-center align-content-center icons" src={insta} alt="instagram-logo"/></button>
              </div>
          </div>
        </div>
        <div className="row justify-content-center align-content-center text-center m-0 copyright">
          <div className="col p-3">© Copyright 2022 Fruit Software, Sistema de gestión para el mercado frutihortícola. Todos los derechos reservados. Políticas de Privacidad. Developed by <a className="gero" href="https://www.linkedin.com/in/geronimo-garzon/">Geronimo Garzon.</a></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
