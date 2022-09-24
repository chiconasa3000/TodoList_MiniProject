import React from 'react';
import './TodoList.css';
import {TodoSearch} from './TodoSearch';
import {TodoCounter} from './TodoCounter';
import { TodoCabecera } from './TodoCabecera';
import { CreateTodoButton } from './CreateTodoButton';

function TodoList(props){
    return(
        <React.Fragment>
            <section className='TodoList'>
                <TodoCabecera 
                    total = {props.total}
                    completed = {props.completed}
                    searchValue = {props.searchValue}
                    setSearchValue = {props.setSearchValue}
                    />
                <ul>
                    {props.children}
                </ul>
                <CreateTodoButton/>
            </section>
        </React.Fragment>
    );
}

export {TodoList};