import React from 'react'
import { useState } from 'react' //useState es una libreria que se le pasa al componente ItemCount desde el componente App

const ItemCount = () => {
    const [count, setCount] = React.useState(0); //count es una variable que se le pasa al componente ItemCount desde el componente App
  return (
    <div className='card w-25' >
        <label>{ count }</label>
        <br />
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default ItemCount