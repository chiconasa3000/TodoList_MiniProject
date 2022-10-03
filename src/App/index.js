import React from 'react';
import {useState} from 'react';
import {AppUI} from './AppUI';

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

function useLocalStorage(itemName, initialValue){
  
  //Cada vez que se aperture la app consigue
  //informacion de localStorage
  //informacion por default al no haber inicialmente nada
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  //En caso de que no hay informacion
  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(
      initialValue
    ));
    parsedItem = initialValue;
  }else{
    //Si ya hay informacion de la lista
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  //Persistencia de datos cuando completa o elimina items
  const saveItem = (newItem) => {
    //El array actualizado se convierte a texto
    const stringifiedTodos = JSON.stringify(newItem);
    //se persiste en localstorage
    localStorage.setItem(itemName, stringifiedTodos);
    //y se realiza la actualizacion de la lista
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ];
}

function App(props) {
  
  const [todos, saveTodos] = useLocalStorage('TODOS_V2',defaultTodos);
  const [name, saveName] = useLocalStorage('nombreimp','fernando');

  //Estado del arreglo de elemento
  
  
  //Estado del termino de búsqueda
  const [searchValue, setSearchValue] = useState('');

  //Estado de completado de un item de la lista
  //const [completedFlags, setCompletedFlags ] = useState(defaultTodos.map(todo=>todo.completed));

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

  

  /*const onComplete = () => {  
    //con el indice recuperado de la data general(yodo) cambiar su valor
    props.todos[props.indexItem].completed = (completedItem) ? false : true;
    props.setTodos(props.todos.slice()); //copia
  };*/

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = (todos[todoIndex].completed) ? false : true;
    saveTodos(newTodos);
  };

  /*const onDelete = () => { 
    //cambiar de la data general una eliminacion      
    props.todos.splice(props.indexItem,1);
    //setear una nueva copia de la data general(todos)
    props.setTodos(props.todos.map(x=>x));
  };*/


  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  

  return (
    <AppUI
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}

      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
