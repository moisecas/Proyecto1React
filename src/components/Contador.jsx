import React from 'react'

const Contador = () => {

  const [contador, setContador] = React.useState(0) 
  
  const aumentar = () =>{
      console.log("click")  
      setContador(contador + 1)
  }
  
  return (
    <div>
        <h2>Contador</h2>
        <h3>nuestro numero aumentado: {contador} </h3>
        <h4>
            { 
                contador > 2 ? "es mayor a 2": "es menor a 2"
            }

        </h4>
        <button onClick={()=> aumentar()}>AumentarNum</button> 
    </div>
  )
}

export default Contador