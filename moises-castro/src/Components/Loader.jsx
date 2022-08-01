import React from 'react'
import {Spinner} from 'reactstrap' 

import './Loader.css' 
import 'bootstrap/dist/css/bootstrap.min.css' 

const Loader = () => {
    
  return (
    <div>
    Soy el loading 
     
        <Spinner color="danger" />
    </div>
  )
}

export default Loader