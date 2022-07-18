import React, { useEffect } from 'react'

//instanciar una clase 
const task = new Promise((resolve, reject) => { //parametros de la promesa (resolve, reject) 
    //acciones pueden ser asincronas o no 
    resolve ('status 200 ok'); //si se cumple la promesa, se ejecuta el resolve
    reject ('status 500 error'); //si no se cumple la promesa, se ejecuta el reject
}) //recibe una callback que se ejecuta cuando se resuelve la promesa
console.log(task) //devuelve una promesa

const task2 = (dividiendo, divisor) => {
    return new Promise((resolve, reject) => {
        if(divisor === 0){
            reject('no se puede dividir por 0')
        }
        resolve(dividiendo/divisor)
    }
    )
}
let products = [
    {id: 1, name: 'Product 1', price: '$100.00', quantity: 1},
    {id: 2, name: 'Product 2', price: '$1.00', quantity: 1}, 
    {id: 3, name: 'Product 3', price: '$15.00', quantity: 1},
]
 
 //parametros de la promesa (resolve, reject)

const ItemListContainer = () => {
    useEffect(() => {
        const url = './json/Data.json'
        fetch(url)
        .then(response => response.json())
        .then(respuesta=>console.log(respuesta.products))
        .catch(error => console.log(error))
    }, [])
    
     //estado inicial de los productos (products) vacio 
    task 
    .then(respuesta=>{ //primer parametro de la promesa (respuesta) 
        
        console.log(respuesta)
    }) //si se cumple la promesa, se ejecuta el then
    .catch( //segundo parametro de la promesa, captura todos los ereores 
        error=>{
            console.log(error)
        }
    ) //si no se cumple la promesa, se ejecuta el catch

    //Ejemplo 

    task2(10,5) //parametros de la promesa (resolve, reject, dividiendo, divisor)
    .then(respuesta=>{
        console.log(respuesta)
    })
    .catch(
        error=>{
            console.log(error)
        } 
       
    
    )
    .finally(()=>{
        console.log('termino la promesa') 
    }) //al terminar la promesa se ejecuta el finally 

    //Ejemplo 2 setTimeout    
    
   

    products.forEach(product => {
        setTimeout(()=>{
            console.log(product)
        }
        ,8000) //tiempo de espera para ejecutar la funcion y mostrar el producto
    }) //recorre el array de productos

  return (
    <div>ItemListContainer
        <ul>
            
            {products.map(product => (product.name))} 
        </ul>
 
    
        
   
    </div>
    
    //recorre el array y ejecuta la funcion]}
  )
}

export default ItemListContainer