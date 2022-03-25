import React, {Fragment, useState} from 'react'

const Eventos = () => { 

  const [texto, setTexto] = useState("texto desde estado") 
    
  const eventoClick = () => { 
      alert('me diste un click') 
      setTexto("cambiando el texto") 
  }  

  return (
    <Fragment>
        <hr/> 
        <h2>{texto}</h2>  
        <button onClick={()=>eventoClick()}>Click</button> 
    </Fragment>
  )
}

export default Eventos