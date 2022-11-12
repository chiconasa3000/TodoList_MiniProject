import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal}) {
    const {setProductDetails} = React.useContext(TodoContext); 
    /*Si pasas parametros doble arrow function*/
    const onClickButton = () => {
        //recibe una arrow function 
        //con argument prevState y retorna el argumento negado
        setOpenModal(prevState => !prevState);
        let prodDet = {
            esEdit: false,
            category: "",
            description: "",
            quantity: 0,
            uprice: 0.0,
        };
        setProductDetails(prodDet);
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