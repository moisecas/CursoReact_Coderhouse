import React, { useReducer } from 'react'
import { shopingReducer,shoppingInitialState } from '../reducers/cartReducer';





const Cartwidget = () => {
  
  const  [state,dispatch]= useReducer(
    shopingReducer,shoppingInitialState
    ); 
    const {products,cart}=state; 
  return (
    <div className="cart-widget">
      <h2>Carrito de compras</h2> 
      <h3>Productos</h3>
      <article className='box' ></article>
      <h3>Carrito</h3>
      <article className='box' ></article>
        
    </div>      
        
  )
}

export default Cartwidget

