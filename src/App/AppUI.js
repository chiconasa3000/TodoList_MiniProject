import React from 'react'
import {TodoCreacion} from '../TodoCreacion';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {TodoContext} from '../TodoContext';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';

import {TodosError} from '../TodosError';
import {TodosLoading} from '../TodosLoading';
import {EmptyTodos} from '../EmptyTodos';

function AppUI(){
  const {
    error, 
    loading, 
    searchedTodos,
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    } = React.useContext(TodoContext)
  return(
    <React.Fragment>
      <TodoCreacion/>
      <TodoList>
        {error && <TodosError error={error}/>}
        {loading && <TodosLoading/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos/>}
        {searchedTodos.map(todo =>(
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
            />            
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}

    </React.Fragment>
  );
}

export {AppUI};