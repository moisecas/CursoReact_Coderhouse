import React, { createContext } from 'react';

export const cartContext = createContext(null);

const CartProvider = (props) => {
  const [cart, setCart] = React.useState([]); //funciones globales 

  const addToCart = (item,qty) => {
    
    let product = {...item,qty};

    setCart([...cart, product]);
    

  } 
  
  return (
    <cartContext.Provider value={{ cart, setCart, addToCart }}>
      {props.children}
    </cartContext.Provider>
  );
}

export default CartProvider; 