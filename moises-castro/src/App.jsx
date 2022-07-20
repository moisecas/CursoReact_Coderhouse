
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import './App.css';
import { useState } from "react"; 
//importar clase.jsx
import Clase from './Components/Clases';
import Formulario from './Components/Formulario';
import Container from './Components/Container';
import Props from './Components/Props';
import ItemListContainer from './Components/ItemListContainer';

import Cart from "./Components/Cart";
import Barra from './Components/Barra';



function App() {
  const [nombre, setNombre] = useState("");

  return (
    <BrowserRouter> 
      <div className="App">
        <img src="./src/logo.svg" alt="moises" />
        <input type="text" placeholder="Search" />
        <input type="text" placeholder="Search" />
        <hr />
        <div>
          Moiso
        </div>
        <Barra/> 
        <Routes> 
        
          <Route path="/" element={<Clase />} /> {/* element es una funcion que retorna un componente */} 
          componentes que requieren ruta, por ejemplo navbar no necesita pues es fijo en la pagina
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/cart" element={<Cart />} /> {/* componente que requiere ruta */}
          <Route path="/props" element={<Props />} />
          <Route path="/itemlist" element={<ItemListContainer />} />
          
          <Route path="*" element={<Navigate to="/"/>} />  

        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
