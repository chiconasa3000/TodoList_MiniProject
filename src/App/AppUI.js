import React from 'react'
import {TodoDash} from '../TodoDash';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {TodoContext} from '../TodoContext';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';
import {TodoReport} from '../TodoReport';

import {TodosError} from '../TodosError';
import {TodosLoading} from '../TodosLoading';
import {EmptyTodos} from '../EmptyTodos';
import {FiMenu} from 'react-icons/fi';
import './App.css'

function AppUI(){

  const {
    error, 
    loading, 
    searchedTodos,
    completeTodo, 
    deleteTodo,
    openModalForm,
    openModalReport,
    setOpenModalReport,
    } = React.useContext(TodoContext);
  
  const onClickButtonDash = () =>{
    setOpenModalReport(current => !current);
  };


  return(
    <React.Fragment>
      <TodoDash/>
      <button
        className="todolist-buttondash"
        onClick={onClickButtonDash}
      >
        <FiMenu className="todolist-buttondash--icon"/>
      </button>
      <TodoList>
        {error && <TodosError error={error}/>}
        {loading && <TodosLoading/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos/>}
        {searchedTodos.map(todo =>(
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

      {!!openModalForm && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}

      {!!openModalReport && (
        <Modal>
          <TodoReport></TodoReport>
        </Modal>
      )}

    </React.Fragment>
  );
}

export {AppUI};