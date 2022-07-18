
import './App.css';
import { useState } from "react"; 
//importar clase.jsx
import Clase from './Components/Clases';
import Formulario from './Components/Formulario';
import Container from './Components/Container';
import Props from './Components/Props';
import ItemListContainer from './Components/ItemListContainer';
import Personajes from "./Components/Personajes";



function App() {
  const [nombre, setNombre] = useState("");

  return (
    <div className="App">
      <img src="./src/logo.svg" alt="moises" />
      <input type="text" placeholder="Search" />
      <input type="text" placeholder="Search" />
      <hr />
      <div>
        Moiso
      </div>
      <ItemListContainer /> 
      <Container />
      <Clase />
      <Formulario />  {/*importar Formulario.jsx*/} 
      <h1> Reutilizar componentes </h1>
      <Clase />
      <Formulario saludar="hola"/>  {/*importar Formulario.jsx*/} 
      
      <h1> Reutilizar componentes </h1>
      <Clase />
      <Formulario />  {/*importar Formulario.jsx*/} 
      <h1> Reutilizar componentes </h1>
      <Clase />
      <Formulario />  {/*importar Formulario.jsx*/} 
      <h1> Reutilizar componentes </h1>
      {/*prop saludar*/}
      <Formulario  />  {/*importar Formulario.jsx*/}
      <h1> Reutilizar componentes </h1>
      <Props />
      <h1> Api personajes </h1>
      <Personajes  /> 
      

    </div>
  );
}

export default App;
