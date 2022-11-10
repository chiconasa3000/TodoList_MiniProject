import React from 'react';
import './TodoDetail.css';
import { TodoCabecera } from '../TodoCabecera';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import {TodoSection} from '../TodoSection';
import {TodoSectionItem} from '../TodoSectionItem';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {TodosLoading} from '../TodosLoading';
import {EmptyTodos} from '../EmptyTodos';
import {TodosError} from '../TodosError';
function TodoDetail(){
  
  const {loading,error,searchedTodos,searchedTodosCat,setOpenModalForm,completeTodo,deleteTodo} = React.useContext(TodoContext);
  

  return(
    <React.Fragment>
      <div className='todoDetail'>
        <TodoCabecera/>
        <TodoSection>
          {searchedTodos.map(todo =>(
            <TodoSectionItem
              key={Object.keys(todo)[0]}
              title = {Object.keys(todo)[0]}
            />            
          ))}
        </TodoSection>
        <TodoList>
          {error && <TodosError error={error}/>}
          {loading && <TodosLoading/>}
          {(!loading && !searchedTodosCat.length) && <EmptyTodos/>}
          {searchedTodosCat.map(todo =>(
            <TodoItem 
              key={todo.text}
              text={todo.text}
              cant={todo.cant}
              price={todo.price}
              
              completed={todo.completed}
              onComplete={()=>completeTodo(todo.text)}
              onDelete={()=>deleteTodo(todo.text)}
              />            
          ))}
        </TodoList>
        
        
        <CreateTodoButton
          setOpenModal={setOpenModalForm}
        />
      </div>
    </React.Fragment>
  );
}

export {TodoDetail};