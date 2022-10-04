import React from 'react'
import {TodoCreacion} from '../TodoCreacion';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {TodoContext} from '../TodoContext';

function AppUI(){
  const {
    error, 
    loading, 
    searchedTodos,
    completeTodo, 
    deleteTodo,
    } = React.useContext(TodoContext)
  return(
    <React.Fragment>
      <TodoCreacion/>
      <TodoList>
        {error && <p>Hubo un error calma reportalo y lo solucionaremos</p>}
        {loading && <p>Estamos Cargando no desesperes</p>}
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
    </React.Fragment>
  );
}

export {AppUI};