import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal}) {
    /*Si pasas parametros doble arrow function*/
    const onClickButton = () => {
        //recibe una arrow function 
        //con argument prevState y retorna el argumento negado
        setOpenModal(prevState => !prevState);
    };

    return (
        <button 
            className='CreateTodoButton'
            onClick={onClickButton}
        >
            <span>+</span>
        </button>
    );
}

export {CreateTodoButton};