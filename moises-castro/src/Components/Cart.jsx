import React, {useState} from 'react'
import Loader from './Loader'
import 'bootstrap/dist/css/bootstrap.min.css'  

const Cart = () => {

  const [Loader, setLoader] = useState(false)

  const cambiarEstado = () => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }  


  if(Loader){
    return(

      <Loader/>
    ) 

  }
  else{
    return(
      <div className='cart'>
        <br/>
        <button className='btn btn-primary' onClick={()=>cambiarEstado()} >Cargar</button>  

      </div>
    )
  }
} 

export default Cart