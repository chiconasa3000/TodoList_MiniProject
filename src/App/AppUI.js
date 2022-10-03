import React from 'react'
import {TodoCreacion} from '../TodoCreacion';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}){
  return(
    <React.Fragment>
      <TodoCreacion/>
      <TodoList
        total = {totalTodos}
        completed = {completedTodos}
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      >
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