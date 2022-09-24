import React from 'react';
import {useState} from 'react';
//import TodoSearch from './TodoCounter'
import {TodoCabecera} from './TodoCabecera';
import {TodoCreacion} from './TodoCreacion';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'Cut potatoes', completed:false},
  {text: 'Crying with Llorona', completed:true},
  {text: 'Crying cutting onions', completed:false},
  {text: 'Make the dinner', completed:true},
  {text: 'Take out the garbage', completed:true},
  {text: 'Cut 1 tomatoes', completed:true},
  {text: 'Cut 2 tomatoes', completed:false},
  {text: 'Cut 3 tomatoes', completed:true},
  {text: 'Cut 4 tomatoes', completed:false},
  {text: 'Cut 5 tomatoes', completed:false},
  {text: 'Cut 6 tomatoes', completed:true}
];
function App(props) {

  //Estado del arreglo de elemento
  const [todos, setTodos] = useState(defaultTodos);
  
  //Estado del termino de búsqueda
  const [searchValue, setSearchValue] = useState('');

  //Estado de completado de un item de la lista
  const [completedFlags, setCompletedFlags ] = useState(defaultTodos.map(todo=>todo.completed));

  /*** Obteniendo mas propiedades o data del valor-estado ***/
  //Cantidad de TODOs completados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  //Cantidad total de TODOs sin filtrar
  const totalTodos = todos.length;

  //Esto va a cambiar constantemente array filtrado por termino de busqueda
  let searchedTodos = [];

  /*Logica para filtrar los elementos del array*/
  //Si se ingresa en termino mas de una letra
  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo=>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      //include function js compare two strings
      return todoText.includes(searchText);
    });
  }

  

  return (
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

              todos={searchedTodos}
              setTodos={setTodos}
              indexItem = {searchedTodos.indexOf(todo)}
              />            
          ))}
      </TodoList>
      
    </React.Fragment>
  );
}

export default App;
