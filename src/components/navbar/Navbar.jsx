import React, {useState, useEffect} from "react";
import logo from "../../assets/logo.png";
import reel from "../../assets/reel.png";
import Typewriter from 'typewriter-effect';

import "./navbar.css";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 650) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }

      useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
      })

  return (
    <>
      <div className={navbar ? "navbar-active" : "navbar-container"}>
        <nav className="navbar navbar-dark navbar-expand-lg px-5">
          <div className="container-fluid p-0">
            <a className="navbar-brand text-white m-0 p-2" href="/">
              <img className="logo-navbar" src={logo} alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
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
                   <a className="nav-link text-white p-0 m-0 contacto" href="#contacto">
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
                        '<h2 style="font-size:50px;color:#fff; text-align: center;">Gestioná tu negocio de manera <br/><span style="color: #f1d302;">rápida y sencilla</span></h2>',
                        '<h2 style="font-size:50px;color:#fff; text-align: center;">Realizá pedidos desde <br/><span style="color: #f1d302;">cualquier dispositivo</span></h2>', 
                        '<h2 style="font-size:50px;color:#fff; text-align: center;">Controlá tu stock desde <br/><span style="color: #f1d302;">cualquier lugar</span></h2>',
                        '<h2 style="font-size:50px;color:#fff; text-align: center;">Mejorá con <span style="color: #f1d302;">Fruit Software™</span></h2>'
                      ],
                        autoStart: true,
                        loop: true,
                        delay:30,
                        deleteSpeed:10,
                        pauseFor:1500,
                        skipAddStyles: true,
                        cursor: '',
                      }}
                    />
          </div>
        <div className="row align-content-center justify-content-center my-5 py-5 ">
          <div className="col d-flex justify-content-center">
              <button className="btn btn-outline-warning contacto text-white m-3">VER MAS</button>
              <button className="btn m-2"><img src={reel} className="reel mx-3" alt="reel"/><span className="text-white">VER NUESTRO REEL</span></button>
           </div>
           </div>
      </div>
    </>
  );
};

export default Navbar;
