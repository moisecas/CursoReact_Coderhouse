

//componentes 
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';


import {BrowserRouter as Router} from 'react-router-dom';

//librerias 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardProduct from './Components/CardProduct';
import ItemDetail from './Components/ItemDetail';


import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import 'boxicons'; //importar libreria de iconos de fontawesome 



function App() {
  return (
      <div className='app' >  

      
    
      <Router>
        <Header/>
        
       
       
        <ItemListContainer  /> 
        <ItemDetail />
        <ItemDetail />
        <ItemDetail />
        
        
        <Products/> 
        
      </Router>
      </div>
      
    
  );
}

export default App;
