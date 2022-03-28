import React from 'react';
import Contador from './components/Contador.jsx';
import Eventos from './components/Eventos.jsx';
import Formulario from './components/Formulario.jsx';
import Listas from './components/Listas.jsx';
import ListasDos from './components/ListasDos.jsx';
import Parrafo from './components/Parrafo.jsx'; //taer los components al js que renderiza el proyecto
import Variables from './components/Variables.jsx';
//al tener componentes podemos usarlo las veces que queramos <Parrafo /> dentro del div de la función app 
 
function App() {
  return ( //retornamos todo nuestro html 
    <div className='container mt-5'> 
       <h1>Hola mundo</h1> 
       <Parrafo /> 
       <Variables /> 
       <Eventos />
       <Contador />
       <Listas />
       <ListasDos />  
       <Formulario /> 
    </div>
  );
}

export default App;
