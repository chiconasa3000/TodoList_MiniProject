import React from 'react'
import {useLocalStorage} from './useLocalStorage.js';
const TodoContext = React.createContext();
let defaultarray = 
  [
      {"verduras": 
          [
              {
                  "completed": false,
                  "text": "espinaca",
                  "cant": 2,
                  "price": "1.4"
              },
              {
                  "completed": false,
                  "text": "tomate",
                  "cant": 3,
                  "price": "4.4"
              },
              {
                  "completed": true,
                  "text": "beterraga",
                  "cant": 1,
                  "price": "22.1"
              },
              {
                  "completed": true,
                  "text": "apio",
                  "cant": 3,
                  "price": "18.1"
              },
              {
                "completed": true,
                "text": "navo",
                "cant": 5,
                "price": "5.12"
              },
              {
                "completed": true,
                "text": "zapallo",
                "cant": 2,
                "price": "2.12"
              },
          ]
      },
      {"carnes":
          [
              {
                  "completed": true,
                  "text": "carne res",
                  "cant": 3,
                  "price": "2.1"
              },
              {
                  "completed": false,
                  "text": "carne cerdo",
                  "cant": 2,
                  "price": "8.2"
              },
              {
                  "completed": true,
                  "text": "carne de cordero",
                  "cant": 2,
                  "price": "21.1"
              },
          ]
      },

      {"lacteos":
          [
              {
                  "completed": true,
                  "text": "yogurt",
                  "cant": 2,
                  "price": "3.1"
              },
          ]
      },
  ];

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
    const [openModalPlot, setOpenModalPlot] = React.useState(false);
    const [productDetails, setProductDetails] = React.useState({esEdit: false, category:"", description:"",quantity:0,uprice:0.0});
    

    //categoria
    const [section, setSection] = React.useState("verduras");

    /*if(todos[0] !== undefined){
      let newsection = Object.keys(todos[0])[0];
      setSection(newsection);
    }*/

    //Estado de Expense o Gastos
    let listProdCompletado = []
    // console.log("todos");
    // console.log(todos);
    
    todos.forEach(cat => {
      let objetosPorCategoria = Object.values(cat);
      listProdCompletado.push(objetosPorCategoria[0].filter(prod => prod.completed));
    });

    let totalExpenses = 0.0;
    if(listProdCompletado !== undefined){
      totalExpenses = listProdCompletado.flat().reduce((pTodo,cTodo) => pTodo + parseFloat(cTodo.price) * parseFloat(cTodo.cant),0.0);
    }
    
  
    /*** Obteniendo mas propiedades o data del valor-estado ***/
    //Cantidad de TODOs completados
    const completedTodos = todos.map(cat => {
      return Object.values(cat)[0].filter(prod => !!prod.completed);
    }).flat().length;

    //Cantidad total de TODOs sin filtrar
    const totalTodos = todos.map(cat => {
      return Object.values(cat)[0].length;
    }).reduce((psum, tamProdPorCat)=> psum + tamProdPorCat,0);

    //Esto va a cambiar constantemente array filtrado por termino de busqueda
    let searchedTodos = [];
  
    /*Logica para busqueda por texto sobre los productos*/    
    if(!searchValue.length >= 1){
      searchedTodos = todos;      
    }else{      
      searchedTodos = todos.map(cat => {
          let categoria = ""+Object.keys(cat)[0]+"";
          
          let valoresFiltrados = Object.values(cat)[0].filter(prod=>{
            const todoText = prod.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
          });
          return {[categoria]:valoresFiltrados};
      });      
    }

    // console.log("searchedTodos");
    // console.log(searchedTodos);

    //filtrados por categoria
    let searchedTodosCat = [];
    if(searchedTodos !== undefined){
      //Filtrando por categoria una sola categoria sera devuelta en caso se haya hecho click sobre una seccion
      let indSection = searchedTodos.findIndex(e => Object.keys(e)[0] === section);
      if(searchedTodos[indSection]!==undefined){
        searchedTodosCat = searchedTodos[indSection][section];
      }
    }
    
    const addTodo = (category, text,cant, price) => {
      category = category.toLowerCase();
      text = text.toLowerCase();
      
      if(text !== ""){
        const newTodos = [...todos];

        //verificar si el elemento ya existe
        let todoIndex = -2;
        todos.forEach(cat => {
          if(todoIndex !== -1){
            todoIndex = Object.values(cat)[0].findIndex(todo => todo.text === text);
          }else{
            return;
          }
        });
        //Si no existe ningun elemento coincidente
        if(todoIndex === -1){
          //verificar la categoria o seccion si ya existe asigna en esa seccion
          //si no existe crear la seccion el arreglo y pushea el producto
          let indCat = todos.findIndex(cat=>{
            //reducir la busqueda ya con la seccion actual en que esta
            return Object.keys(cat)[0].toLowerCase() === category;
          });

          let nuevoProd =  {
            completed: false,
            text: text,
            cant: cant,
            price: price,
          };
          if(indCat!==-1){
            //Cuando existe la categoria
            newTodos[indCat][category].push(nuevoProd);
          }else{
            //Cuando no existe la categoria
            newTodos.push({[category]:[nuevoProd]});
          }
          saveTodos(newTodos);
        }
      }
    };

    const editTodo = (category, text,cant, price) => {
      category = category.toLowerCase();
      text = text.toLowerCase();
      
      //ToDo comprobar el resto de elementos
      if(text !== ""){
        const newTodos = [...todos];

        //verificar la categoria o seccion si ya existe asigna en esa seccion
        //si no existe crear la seccion el arreglo y pushea el producto
        let indCat = todos.findIndex(cat=>{
          //reducir la busqueda ya con la seccion actual en que esta
          return Object.keys(cat)[0].toLowerCase() === category;
        });

        let nuevoProd =  {
          completed: false,
          text: text,
          cant: cant,
          price: price,
        };

        //buscar que indice de objeto es actualmente
        let indProd = newTodos[indCat][category].findIndex(prod => {
          return prod.text === text;
        });

        if(indCat!==-1){
          //Cuando existe la categoria
          newTodos[indCat][category][indProd] = nuevoProd;
        }else{
          //Entonces es un nuevo producto
          newTodos[indCat][category].push(nuevoProd);
        }
        saveTodos(newTodos);
        
      }
    };

    const completeTodo = (text) => {
      let indCat = todos.findIndex(cat=>{
        //reducir la busqueda ya con la seccion actual en que esta
        return Object.keys(cat)[0] === section;
      });
      //encontrar el indice del objeto que coincida con el todo.text
      const todoIndex = todos[indCat][section].findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos[indCat][section][todoIndex].completed = (todos[indCat][section][todoIndex].completed) ? false : true;
      
      saveTodos(newTodos);
    };
  
    const deleteTodo = (text) => {
      let indCat = todos.findIndex(cat=>{
        //reducir la busqueda ya con la seccion actual en que esta
        return Object.keys(cat)[0] === section;
      });
      //El texto pasado es un elemento existente en la lista
      //encontrar el indice del objeto que coincida con el todo.text
      const todoIndex = todos[indCat][section].findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos[indCat][section].splice(todoIndex, 1);

      //cuando no exista ningun item en la seccion la eliminamos
      if(newTodos[indCat][section].length === 0){
        newTodos.splice(indCat,1);
      }

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
      searchedTodosCat,
      completeTodo,
      deleteTodo,
      editTodo,
      addTodo,

      openModalForm,
      setOpenModalForm,

      openModalReport,
      setOpenModalReport,

      openModalPlot,
      setOpenModalPlot,

      newBudgetValue,
      setNewBudgetValue,

      section, 
      setSection,

      productDetails, 
      setProductDetails,

    }}>
      {props.children}
    </TodoContext.Provider>
  );
}
export {TodoContext, TodoProvider};