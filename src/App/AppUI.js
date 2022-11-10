import React from 'react'
import {TodoDash} from '../TodoDash';
import {TodoContext} from '../TodoContext';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';
import {TodoReport} from '../TodoReport';
import {TodoDetail} from '../TodoDetail';
import {FiMenu} from 'react-icons/fi';
import './App.css'

function AppUI(){

  const {
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
      <TodoDetail/>
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