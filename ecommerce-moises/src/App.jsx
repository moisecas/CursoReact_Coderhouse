
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    
      <Router>
        <Navbar />
        <Cart />
      </Router>

      
    
  );
}

export default App;
