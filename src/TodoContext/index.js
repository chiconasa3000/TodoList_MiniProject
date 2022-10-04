import React from 'react'
import {useLocalStorage} from './useLocalStorage.js';
const TodoContext = React.createContext();

const defaultTodos = [
  {text: 'Cut potatoes Cut potatoes Cut potatoes Cut potatoes Cut potatoes Cut potatoes Cut potatoes', completed:false},
  {text: 'Crying with Llorona', completed:true},
  {text: 'Crying cutting onions', completed:false},
  {text: 'Make the dinner', completed:true},
  {text: 'Take out the garbage', completed:true},
  {text: 'Cut 1 tomatoes', completed:true},
  {text: 'Cut 2 tomatoes', completed:false},
  {text: 'Cut 3 tomatoes', completed:true},
  {text: 'Cut 4 tomatoes', completed:false},
  {text: 'Cut 5 tomatoes', completed:false},
  {text: 'Cut 6 tomatoes', completed:true},
  {text: 'Cut 7 tomatoes', completed:true},
  {text: 'Cut 8 tomatoes', completed:true},
  {text: 'Cut 9 tomatoes', completed:true},
  {text: 'Cut 10 tomatoes', completed:true},
  {text: 'Cut 11 tomatoes', completed:true},
  {text: 'Cut 12 tomatoes', completed:true},
  {text: 'Cut 13 tomatoes', completed:true},
  {text: 'Cut 14 tomatoes', completed:true}
];

function TodoProvider(props){
    //Estado del arreglo de elemento
    const {
      item: todos,
      saveItem: saveTodos, 
      loading,
      error,
    } = useLocalStorage('TODOS_V2',[]);
  
    //Estado del termino de búsqueda
    const [searchValue, setSearchValue] = React.useState('');
  
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
  
    const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = (todos[todoIndex].completed) ? false : true;
      saveTodos(newTodos);
    };
  
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,

      searchValue,
      setSearchValue,
      
      searchedTodos,
      completeTodo,
      deleteTodo,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}
export {TodoContext, TodoProvider};