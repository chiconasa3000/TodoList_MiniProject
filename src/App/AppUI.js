import React from 'react'
import {TodoCreacion} from '../TodoCreacion';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {TodoContext} from '../TodoContext';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';
import {TodoSkeleton} from '../TodoSkeleton';

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
        {error && <p>Hubo un error calma reportalo y lo solucionaremos</p>}
        {loading && <TodoSkeleton/>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}
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