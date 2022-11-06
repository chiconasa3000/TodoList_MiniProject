import React from 'react';
import './TodoList.css';
import { TodoCabecera } from '../TodoCabecera';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';


function TodoList(props){
    const {setOpenModalForm} = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <section className='TodoList'>
                <TodoCabecera/>
                <ul>
                    {props.children}
                </ul>
                <CreateTodoButton
                    setOpenModal={setOpenModalForm}
                />
            </section>
        </React.Fragment>
    );
}

export {TodoList};