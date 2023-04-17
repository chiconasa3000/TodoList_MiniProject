import React from 'react';
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos}){
    return(
        <h2 className='TodoCounter'>{completedTodos} Items left of {totalTodos}</h2>
    );  
}
export {TodoCounter};