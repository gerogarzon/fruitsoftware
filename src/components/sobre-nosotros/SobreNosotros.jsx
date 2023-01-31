import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

import "./sobrenosotros.css";

import mayorista from "../../assets/mayorista.png";
import minorista from "../../assets/minorista.png";

const SobreNosotros = () => {
  const [focus, setFocus] = React.useState(false);


  let number = 11520;
let startDate = new Date();

function increaseBy15() {
  let currentDate = new Date();
  let diffInDays = (currentDate - startDate) / (1000 * 60 * 60 * 24);
  number += 15 * diffInDays;
}

setInterval(increaseBy15, 1000);
  return (
    <div id="sobrenosotros">
      <div className="container-fluid text-center sobrenosotros">
        <h2 className="sobrenosotros-title-styles pb-2">SOBRE NOSOTROS</h2>
        <div className="d-flex justify-content-center">
          <div className="divider"></div>
        </div>
        <h3 className="subtitle_sobrenosotros py-5 ">
          Ayudar a los pequeños y grandes puesteros frutihortícolas a lograr una
          gestión eficiente mediante el uso de la tecnología.
        </h3>
        {/* <h5 className="text_sobrenosotros pt-3">
          Un equipo que desarrolló un sistema y una App personalizada con tu
          marca para que tus clientes carguen sus pedidos y que debido a la
          cantidad de interesados por esta nueva metología de trabajo, decidimos
          fundar Fruit Software™ y poner a disposición de todo mayorista o
          minorista frutihortícola esta tecnología para que sean más eficientes
          y además mejorar la experiencia de compra de sus clientes.
        </h5> */}
      </div>

      <div className="container-fluid sector text-center py-5 px-2">
        <h2 className="sobrenosotros-title-styles py-3">
          SECTOR EN EL QUE NOS ESPECIALIZAMOS
        </h2>
        <div className="d-flex justify-content-center">
          <div className="divider"></div>
        </div>
        <h3 className="sobrenosotros-subtitle-styles py-5">
          Lográ una ventaja competitiva en tu sector con nuestro sistema
        </h3>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-4 p-0 d-flex flex-column justify-content-start align-items-center parent_hidden">
            <div className="elipse">
              <img
                src={mayorista}
                className="sector-image"
                alt="sector-mayorista"
              />
            </div>
            <h4 className="mercados my-4">
              Mercados Mayoristas Frutihortícolas
            </h4>
            <h3 className="child_hidden">
              Restaurantes, verdulerias, hospitales, empresas, hoteles,
              comedores, colegios. etc.
            </h3>
          </div>
          <div className="col-lg-4 p-0 d-flex flex-column justify-content-start align-items-center parent_hidden">
            <div className="elipse">
              <img
                src={minorista}
                className="sector-image"
                alt="sector-minorista"
              />
            </div>
            <h4 className="mercados my-4">
              Mercados Minoristas Frutihortícolas
            </h4>
            <h3 className="child_hidden">
              Consumidor final, bares, puestos verduleros, etc.
            </h3>
          </div>
        </div>
      </div>

      <div className="container-fluid nuestrosdatos-bg text-center ">
        <h2 className="sobrenosotros-title-styles pt-5 px-2">
          ALGUNOS DE NUESTROS DATOS
        </h2>
        <div className="d-flex justify-content-center divider_parent">
          <div className="divider "></div>
        </div>
        <div className="row px-5 pb-3">
          <div className="col-lg-3 col-xs-12 p-3">
            <div className="row sobrenosotros-number-styles d-flex justify-content-center align-content-center">
              <CountUp start={focus ? 0 : null} end={2} duration={2} z>
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <h1
                      ref={countUpRef}
                      className="sobrenosotros-number-styles"
                    >
                      2
                    </h1>
                  </VisibilitySensor>
                )}
              </CountUp>
            </div>
            <div className="row sobrenosotros-text-styles d-flex justify-content-center align-content-center">
              Años de <br></br> desarrollo
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 p-3">
            <div className="row sobrenosotros-number-styles d-flex justify-content-center align-content-center">
              <CountUp start={focus ? 0 : null} end={4} duration={2} z>
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <h1
                      ref={countUpRef}
                      className="sobrenosotros-number-styles"
                    >
                      4
                    </h1>
                  </VisibilitySensor>
                )}
              </CountUp>
            </div>
            <div className="row sobrenosotros-text-styles d-flex justify-content-center align-content-center">
              Meses desde <br></br> nuestro inicio
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 p-3">
            <div className="row sobrenosotros-number-styles d-flex justify-content-center align-content-center">
              <CountUp start={focus ? 0 : null} end={5} duration={2} z>
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <h1
                      ref={countUpRef}
                      className="sobrenosotros-number-styles"
                    >
                      5
                    </h1>
                  </VisibilitySensor>
                )}
              </CountUp>
            </div>
            <div className="row sobrenosotros-text-styles d-flex justify-content-center align-content-center">
              Clientes hasta <br></br> la fecha
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 p-3">
            <div className="row sobrenosotros-number-styles d-flex justify-content-center align-content-center">
              <CountUp start={focus ? 0 : null} end={number} duration={2} z>
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <h1
                      ref={countUpRef}
                      className="sobrenosotros-number-styles"
                    >
                      {number}
                    </h1>
                  </VisibilitySensor>
                )}
              </CountUp>
            </div>
            <div className="row sobrenosotros-text-styles d-flex justify-content-center align-content-center">
              Pedidos <br></br> entregados
            </div>
          </div>
          {/* <div className="col-lg-3 col-xs-12 p-3">
            <div className="row sobrenosotros-number-styles d-flex justify-content-center align-content-center">
              <CountUp start={focus ? 0 : null} end={30251} duration={2} z>
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <h1
                      ref={countUpRef}
                      className="sobrenosotros-number-styles"
                    >
                      30251
                    </h1>
                  </VisibilitySensor>
                )}
              </CountUp>
            </div>
            <div className="row sobrenosotros-text-styles d-flex justify-content-center align-content-center">
              Tazas de café<br></br> tomadas :)
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
