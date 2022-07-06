import React from 'react'

const Formulario = () => {
  return (
    <div>
        <h1>Formulario</h1>
        <hr />
        <form>
            <label>Nombre</label>
            <input type="text" placeholder="Nombre" />
            <label>Apellido</label>
            <input type="text" placeholder="Apellido" />
            <label>Email</label>
            <input type="text" placeholder="Email" />
            <label>Password</label>
            <input type="text" placeholder="Password" />
            <label>Confirmar Password</label>
            <input type="text" placeholder="Confirmar Password" />
            <button>Enviar</button>
        </form>
    
    </div>
  )
}

export default Formulario