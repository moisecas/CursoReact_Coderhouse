import React from 'react'
// import ItemCount from './ItemCount'
// import CardProduct from './CardProduct'

const ItemListContainer = ({saludo}) => { //saludo es un parametro que se le pasa al componente ItemListContainer desde el componente App
  return (
    <div className='t-center' >
        {saludo}
        {/* <CardProduct /> */}
        {/* <ItemCount /> se le pasa al componente ItemCount desde el componente ItemListContainer */}

    </div> //saludo es un parametro que se le pasa al componente ItemListContainer desde el componente App
    
    )
}

export default ItemListContainer