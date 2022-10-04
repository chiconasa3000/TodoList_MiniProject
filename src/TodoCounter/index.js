import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return(
        <h2 className='TodoCounter'>{completedTodos} Tasks left of {totalTodos}</h2>
    );  
}
//No usar ya que requeriras asignar un nombre
//export default TodoCounter;
export {TodoCounter};