
import './App.css';
//importar clase.jsx
import Clase from './Components/Clases';
import Formulario from './Components/Formulario';
import Container from './Components/Container';



function App() {
  return (
    <div className="App">
      <img src="./src/logo.svg" alt="moises" />
      <input type="text" placeholder="Search" />
      <input type="text" placeholder="Search" />
      <hr />
      <div>
        Moiso
      </div>
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
      

    </div>
  );
}

export default App;
