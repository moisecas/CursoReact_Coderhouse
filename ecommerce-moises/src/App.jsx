
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import Cartwidget from './Components/CartWidget/Cartwidget'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    
      <Router>
        <Navbar />
        <Cartwidget />
      </Router>

      
    
  );
}

export default App;
