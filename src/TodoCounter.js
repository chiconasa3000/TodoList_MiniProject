import React from 'react';
import './TodoCounter.css';

function TodoCounter(){
    return(
        <h2 className='TodoCounter'>Has completado 2 de 3 TODOs</h2>
    );
}
//No usar ya que requeriras asignar un nombre
//export default TodoCounter;
export {TodoCounter};