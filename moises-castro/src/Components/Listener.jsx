//eventos react js

import React from 'react'

const Listener = () => {
    window.addEventListener('load', function() {
        console.log('load');
    }); //callback 

    function activateLasers() {
        console.log('lasers activated');
    }
    
    function handleSubmit(e) {
          e.preventDefault();
          console.log('You clicked submit.');
        }
    
    function validarvocales(e) {
        let vocales = ['a', 'e', 'i', 'o', 'u'];
        let palabra = e.target.value;
        let contador = 0;
        for (let i = 0; i < palabra.length; i++) {
            if (vocales.includes(palabra[i])) {
                contador++;
            }
        }
        console.log(contador);
    }

    const vocal = (e) => {
        if(e.key==='a' || e.key==='e' || e.key==='i' || e.key==='o' || e.key==='u'){
            e.preventDefault();
            console.log(e.key); 
        }
    }
    
  return (
    
    <div>listener
        <button onClick={activateLasers}>
            Activate Lasers
        </button>
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
        <input type="text" />Vocales en el texto
        <button type="submit" onClick={validarvocales} >Validar</button>
        <input type="text" onKeyDown={vocal} />
    </div>
    




  )
}

export default Listener

