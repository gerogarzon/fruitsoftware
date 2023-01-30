import Navbar from './components/navbar/Navbar'
import NuestroServicio from './components/nuestro-servicio/NuestroServicio'
import Clientes from './components/clientes/Clientes'
import SobreNosotros from './components/sobre-nosotros/SobreNosotros'
import Galeria from './components/galeria/Galeria';
import Footer from './components/footer/Footer'
import whatsapp from './assets/whatsapp.png';


import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <NuestroServicio/>
      <Clientes/>
      <SobreNosotros/>
      <Galeria/>
      <Footer/>
      <div className="flotante">
        <a href="https://api.whatsapp.com/send?phone=+5493815065129&text=Hola, estoy interesado, me gustaria tener mas informacion, porfavor de contactarme!"><img style={{width:"50px", height:"50px"}}src={whatsapp} alt="whatsapp-logo"/></a>
     </div>
    </div>
  );
}

export default App;
