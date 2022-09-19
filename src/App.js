// import logo from './logo.svg';
// import './App.css';
import React from 'react';
//import TodoSearch from './TodoCounter'
import {TodoCounter} from './TodoCounter'
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const todos = [
  {text: 'Cortar cebolla', completed:false},
  {text: 'Cortar papa', completed:true},
  {text: 'Cortar tomates', completed:true},
];
function App(props) {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
          {todos.map(todo =>(
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}/>            
          ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
