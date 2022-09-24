import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    /*Si pasas parametros doble arrow function*/
    const onClickButton = (msg) => {
        alert(msg);
    };

    return (
        <button 
            className='CreateTodoButton'
            onClick={() => onClickButton("Creacion de Tarea...")}
        >
            <span>+</span>
        </button>
    );
}

export {CreateTodoButton};