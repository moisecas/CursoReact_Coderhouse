import React from 'react'
import './ItemCount.css'
import { useState } from 'react' //useState es una libreria que se le pasa al componente ItemCount desde el componente App
// import product from '../images/product1.jpeg'; 

const ItemCount = () => {
    const [count, setCount] = React.useState(0); //count es una variable que se le pasa al componente ItemCount desde el componente App
    //setCount es una funcion que se le pasa al componente ItemCount desde el componente App
    return (
      
    <div className='card w-25' >
        
        <label>{ count }</label> {/* count es una variable que se le pasa al componente ItemCount desde el componente App */}
        <br />
        {/* <img src={product} alt="cart" className='w-60' />  */}
        <button onClick={() => setCount(count + 1)}>+</button> {/*  */}
        <button onClick={() => setCount(count - 1)}>-</button>
    </div>
    
  )
}

export default ItemCount