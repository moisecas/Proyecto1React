import React from 'react'

const Formulario = () => {
  const [fruta, setFruta] = React.useState('') //ESTADO POR CADA UNO DE LOS INPUT 
  const [descripcion, setDescripcion] = React.useState('') //ESTADO POR CADA UNO DE LOS INPUT
  const [lista, setLista] = React.useState([]) //para mostrar los datos del formulario en pantalla

  const guardarDatos = (e) => { //función para validación datos del formulario 
        e.preventDefault() //cada vez que use onSubmit debo usar preventdedault 
        console.log('procesando datos...')

        //verificación de datos escritos en el formulario 
        if(!fruta.trim()){ //una vez que terminé de limpiar los datos ejecute lo siguiente
            console.log('esta vacio espacio fruta') 
            return //para que se salga de la función
        } 
        if(!descripcion.trim()){ //una vez que terminé de limpiar los datos ejecute lo siguiente
            console.log('esta vacio espacio descripción') 
            return //para que se salga de la función
        } 
        console.log('procesando los datos...' + fruta + descripcion)
        
        setLista([ //para mostrar los datos en pantalla, ver ul dentro del div 
            ...lista, //si ya tiene un elemento no lo tiene que eliminar
            {fruta: fruta, descripcion: descripcion} //objeto, propiedad fruta y su valor esta en fruta
        ]) //indicamos que es un array

        e.target.reset() 
        setFruta('')
        setDescripcion('') 
        //limpiando los datos ya recibidos y procesados por el formulario  
  }
  
  return (
    <div>
        <h2>Formulario</h2> 
        <form onSubmit={guardarDatos}> 
            <input type="text" placeholder='ingrese fruta' className='form-control mb-2'
                onChange={(e) => setFruta (e.target.value)} //detectando cada cosa que escribe el usuario en el formulario 
            /> 
            <input type="text" placeholder='ingrese descripcion' className='form-control mb-2'
                onChange={(e) => setDescripcion(e.target.value)}//recibimos un parametro que es el evento y por un => colocamos set, set recibe el evento
            /> 
            <button className='btn btn-primary btn-block' type='submit' >Enviar o agregar</button> 
        </form>
        <ul> 
            { //para mostrar en pantalla los datos
                lista.map((item, index) =>(  
                    <li key={index}>
                        {item.fruta} - {item.descripcion}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Formulario