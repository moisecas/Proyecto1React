import React from 'react'

const Variables = () => {
  const saludo = 'hola desde constante en variables'  
  const imagen = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/L80385-flash-superhero-logo-1544.png' 
  return (
    <div>
        <p>Otro componente {saludo}</p>
        <img src= {imagen} alt=""/>   
    </div>
  )
}

export default Variables 