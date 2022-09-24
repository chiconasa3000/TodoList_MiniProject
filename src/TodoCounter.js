import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }){
    return(
        <h2 className='TodoCounter'>{completed} Tasks left of {total}</h2>
    );  
}
//No usar ya que requeriras asignar un nombre
//export default TodoCounter;
export {TodoCounter};