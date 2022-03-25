//como se haría desde una base de datos 
import React, { useState } from 'react'

const ListasDos = () => {

  const estadoInicialDos = [
      {id:1, texto:"tarea1"}, 
      {id:2, texto:"tarea2"}, 
      {id:3, texto:"tarea3"}, 
  ]   

  const [listas,setLista2] = useState(estadoInicialDos)  
  
  const agregarElementos = () => {
      console.log('click') 
      setLista2([
          ...listas, //traemos el array actual para no sobreescribir con lo que agreguemos 
          {id:4, texto:"tarea4"} 
      ])
  }
//   //operador de propagación 
//   const arrayUno = ['Chile', 'Argentina']
//   const arrayDos = ['Perú', 'México'] 

//   const Unidos = [...arrayUno, ...arrayDos] //de esta forma unimos arrays 
//   console.log(Unidos) 

  return (
    <div>

        <h2>ListasDos</h2>  
        {
            listas.map((item, index) =>(
                <h4 key={index}> {item.texto}</h4>   
            ))
        }
        <button onClick={()=> agregarElementos()}>Agregar</button> 
    </div>
  )
}

export default ListasDos