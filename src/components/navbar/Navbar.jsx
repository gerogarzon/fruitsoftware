import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logoscroll.png";
import reel from "../../assets/reel.png";
import Typewriter from "typewriter-effect";

import "./navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 650) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });


  return (
    <>
      <div
        id="burger-menu"
        className={navbar ? "navbar-active" : "navbar-container"}
      >
        <nav
          className={
            navbar
              ? "navbar navbar-light navbar-expand-lg p-0 pb-3"
              : "navbar navbar-dark navbar-expand-lg p-0 pb-3"
          }
        >
          <div className={navbar ? "container-fluid p-0" : "container-fluid p-0 "}>
            <a className="navbar-brand text-white m-0 py-2 mx-4 " href="/">
              <img
                className="logo-navbar"
                src={navbar ? logo2 : logo}
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler mx-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={navbar ? "collapse navbar-collapse px-4" : "collapse navbar-collapse px-4 burger-menu"} id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#nuestroservicio"
                >
                  NUESTRO SERVICIO
                </a>
                <a className="nav-link text-white" href="#sobrenosotros">
                  SOBRE NOSOTROS
                </a>
                <a className="nav-link text-white" href="#clientes">
                  CLIENTES
                </a>
                <a className="nav-link text-white" href="#galeria">
                  GALERIA
                </a>
                <button
                  type="button"
                  className="btn btn-outline-warning contacto"
                  style={{ color: "white" }}
                >
                  <a
                    className="nav-link text-white p-0 m-0 contacto"
                    href="#contacto"
                  >
                    CONTACTO
                  </a>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="banner">
        <div className="type">
          <Typewriter
            options={{
              strings: [
                '<h2 style="font-size:40px;color:#fff; text-align: center;"><span style="color: #f1d302;">AHORRÁ</span> HORAS DE <span style="color: #f1d302;">TRABAJO</span> </h2>',
                '<h2 style="font-size:40px;color:#fff; text-align: center;"><span style="color: #f1d302;">MEJORÁ EL CONTROL</span><br>DE TU PUESTO O VERDULERIA</h2>',
                '<h2 style="font-size:40px;color:#fff; text-align: center;">PENSÁ EN LA <span style="color: #f1d302;"><br>EXPERIENCIA DE COMPRA </span><br> DE TUS CLIENTES</h2>',
                '<h2 style="font-size:40px;color:#fff; text-align: center;"><span style="color: #f1d302;">AUMENTÁ</span> TUS VENTAS</h2>',
                '<h2 style="font-size:40px;color:#fff; text-align: center;"><span style="color: #f1d302;">ENFOCATE EN LA CALIDAD</span><br> DE TUS PRODUCTOS  Y EN TU SERVICIO</h2>',
              ],
              autoStart: true,
              loop: true,
              delay: 35,
              deleteSpeed: 10,
              pauseFor: 1500,
              skipAddStyles: true,
              cursor: "",
            }}
          />
        </div>
        <div className="row align-content-center justify-content-center my-5 py-5 ">
          <div className="col d-flex justify-content-center">
            {/* <button className="btn btn-outline-warning contacto text-white m-3"><a className="vermas" href="#nuestroservicio">VER MAS</a></button> */}
            <button className="btn m-2">
              <img src={reel} className="reel mx-1" alt="reel" />
              <span className="text-white">VER NUESTRO REEL</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
