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
        <a  href="https://api.whatsapp.com/send?phone=+5493815988906&text=Hola, me gustaria tener mas informacion, porfavor de contactarme!"><img style={{width:"45px", height:"45px"}}src={whatsapp}/></a>
     </div>

    </div>
  );
}

export default App;
