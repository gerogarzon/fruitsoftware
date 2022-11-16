import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

import "./sobrenosotros.css";

import mayorista from '../../assets/mayorista.png';
import minorista from '../../assets/minorista.png';

const SobreNosotros = () => {

  const [focus, setFocus] = React.useState(false);


  return (
    <div id="sobrenosotros">

       <div className="container-fluid text-center sobrenosotros">
        <h2 className="sobrenosotros-title-styles pb-4">SOBRE NOSOTROS</h2>
        <div className="d-flex justify-content-center">
            <div className="divider"></div>
        </div>
        <h3 className="subtitle_sobrenosotros py-5 px-2">Ayudar a los pequeños y grandes mercados frutihortícolas a lograr una gestión eficaz mediante el uso innovador dela tecnología.</h3>
        <h5 className="text_sobrenosotros p-3">Creemos que el lápiz y el papel quedaron obsoletos en un mundo tan digitalizado, la organización y las plataformas integradas cambian las reglas del juego para nuestros clientes. Brindamos un sistema – software enfocado en optimizar y agilizar las horas de trabajo y gestión de los mercados y puestos frutihortícolas mediante la tecnología.</h5>
      </div>
      
      <div className="container-fluid sector text-center p-5">
        <h2 className="sobrenosotros-title-styles py-5 px-">SECTOR EN EL QUE NOS ESPECIALIZAMOS</h2>
        <div className="d-flex justify-content-center">
            <div className="divider"></div>
        </div>
        <h3 className="sobrenosotros-subtitle-styles py-5">Lográ una ventaja competitiva en tu sector con nuestro sistema</h3>
        <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 p-0 d-flex flex-column justify-content-center align-items-center">
               <div className="elipse"><img src={mayorista} className="sector-image" alt="sector-mayorista"/></div> 
               <h4 className="mercados my-4">Mercados Mayoristas Frutihortícolas</h4>
            </div>
            <div className="col-lg-4 p-0 d-flex flex-column justify-content-center align-items-center">
               <div className="elipse"><img src={minorista} className="sector-image"alt="sector-minorista"/></div> 
               <h4 className="mercados my-4">Mercados Minoristas Frutihortícolas</h4>
            </div>
        </div>
      </div>

      <div className="container-fluid nuestrosdatos-bg text-center ">
        <h2 className="sobrenosotros-title-styles py-5 px-2">ALGUNOS DE NUESTROS DATOS</h2>
        <div className="d-flex justify-content-center">
            <div className="divider "></div>
        </div>
        <div className="row px-5 pb-3">
          <div className="col-lg-3 col-xs-12 p-3">
            <div className="row sobrenosotros-number-styles d-flex justify-content-center align-content-center">
            <CountUp
                
                start={focus ? 0 : null}
                end={2}
                duration={2}
                z
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <h1 ref={countUpRef} className="sobrenosotros-number-styles" />
                  </VisibilitySensor>
                )}
              </CountUp> 
            </div>
            <div className="row sobrenosotros-text-styles d-flex justify-content-center align-content-center">
              Años desde <br></br>  nuestra fundación
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 p-3">
            <div className="row sobrenosotros-number-styles d-flex justify-content-center align-content-center">
            <CountUp
                
                start={focus ? 0 : null}
                end={27}
                duration={2}
                z
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <h1 ref={countUpRef} className="sobrenosotros-number-styles" />
                  </VisibilitySensor>
                )}
              </CountUp> 
            </div>
            <div className="row sobrenosotros-text-styles d-flex justify-content-center align-content-center">
              Clientes hasta  <br></br> la fecha
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 p-3">
            <div className="row sobrenosotros-number-styles d-flex justify-content-center align-content-center">
            <CountUp
                
                start={focus ? 0 : null}
                end={105}
                duration={2}
                z
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <h1 ref={countUpRef} className="sobrenosotros-number-styles" />
                  </VisibilitySensor>
                )}
              </CountUp> 
            </div>
            <div className="row sobrenosotros-text-styles d-flex justify-content-center align-content-center">
              Puestos utilizando <br></br> nuestro sistema
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 p-3">
            <div className="row sobrenosotros-number-styles d-flex justify-content-center align-content-center">
            <CountUp
                
                start={focus ? 0 : null}
                end={30251}
                duration={2}
                z
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <h1 ref={countUpRef} className="sobrenosotros-number-styles" />
                  </VisibilitySensor>
                )}
              </CountUp> 
            </div>
            <div className="row sobrenosotros-text-styles d-flex justify-content-center align-content-center">
              Tazas de café<br></br> tomadas :)
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SobreNosotros;
