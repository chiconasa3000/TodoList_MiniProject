import React from 'react'
import {useLocalStorage} from './useLocalStorage.js';
const TodoContext = React.createContext();

function TodoProvider(props){
    //Estado del arreglo de elemento
    const {
      item: todos,
      saveItem: saveTodos, 
      loading,
      error,
    } = useLocalStorage('TODOS_V2',[]);
    //Budget compartido con dash y con report
    const [newBudgetValue,setNewBudgetValue] = React.useState(500.0);
    //Estado del termino de búsqueda
    const [searchValue, setSearchValue] = React.useState('');
    const [openModalForm, setOpenModalForm] = React.useState(false);
    const [openModalReport, setOpenModalReport] = React.useState(false);

    //Estado de Expense o Gastos
    const listTodosCompleted =  todos.filter(todo=> todo.completed);
    const totalExpenses = listTodosCompleted.reduce((pTodo,cTodo) => pTodo + parseFloat(cTodo.price) * parseFloat(cTodo.cant),0.0);
    

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
    
    const addTodo = (text,cant, price) => {
      if(text !== ""){
        const newTodos = [...todos];

        //verificar si el elemento ya existe
        if(!todos.some(elem => elem.text === text)){
          newTodos.push({
            completed: false,
            text: text,
            cant: cant,
            price: price,
          });
          saveTodos(newTodos);
        }
      }
    };

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
      totalExpenses,

      searchValue,
      setSearchValue,
      
      searchedTodos,
      completeTodo,
      deleteTodo,
      addTodo,

      openModalForm,
      setOpenModalForm,

      openModalReport,
      setOpenModalReport,

      newBudgetValue,
      setNewBudgetValue,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}
export {TodoContext, TodoProvider};