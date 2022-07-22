

//componentes 
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';


import {BrowserRouter as Router} from 'react-router-dom';

//librerias 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardProduct from './Components/CardProduct';
import ItemDetail from './Components/ItemDetail';




function App() {
  return (
      
      <Router>
        <Navbar />
        
        <CardProduct
          title="Product 1"
          
        /> 
       
        <ItemListContainer saludo={'ShopCoder'} /> 
        <ItemDetail />
      </Router>

      
    
  );
}

export default App;
