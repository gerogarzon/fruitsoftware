import React, {useState, useEffect} from "react";
import logo from "../../assets/logo.png";

import "./navbar.css";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 700) {
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
        <nav className="navbar navbar-expand-lg px-5">
          <div className="container-fluid p-0">
            <a className="navbar-brand text-white m-0 p-2" href="#">
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
                  href="#"
                >
                  NUESTRO SERVICIO
                </a>
                <a className="nav-link text-white" href="#">
                  SOBRE NOSOTROS
                </a>
                <a className="nav-link text-white" href="#">
                  CLIENTES
                </a>
                <a className="nav-link text-white" href="#">
                  GALERIA
                </a>
                <button
                  type="button"
                  className="btn btn-outline-warning contacto"
                  style={{ color: "white" }}
                >
                  CONTACTO
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="banner">
        <div className="typewriter-container">
          <div className="typewriter-first">
            Gestiona tu negocio de manera
            <br></br>
            <span style={{ color: "#f1d302" }}>Rapida y Sencilla</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
