import React from 'react'
import {TodoDash} from '../TodoDash';
import {TodoContext} from '../TodoContext';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';
import {TodoReport} from '../TodoReport';
import {TodoDetail} from '../TodoDetail';
import {FiMenu} from 'react-icons/fi';
import {FiPieChart} from 'react-icons/fi';
import {TodoPlot} from '../TodoPlot';
import './App.css'

function AppUI(){

  const {
    addTodo,
    editTodo,
    openModalForm,
    openModalReport,
    openModalPlot,
    setOpenModalReport,
    setOpenModalPlot,
    setOpenModalForm,
    productDetails,
    } = React.useContext(TodoContext);
  
  const onClickButtonDash = () =>{
    setOpenModalReport(current => !current);
  };

  const onClickButtonPlot = () =>{
    setOpenModalPlot(current => !current);
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
      
      
      <button 
        onClick={onClickButtonPlot} 
        className="todobudget-button">
        <FiPieChart className="todobudget-icon"/>
      </button>
      

      <TodoDetail/>

      {!!openModalForm && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            editTodo={editTodo}
            setOpenModalForm={setOpenModalForm}
            productDetails={productDetails}
          />
        </Modal>
      )}

      {!!openModalReport && (
        <Modal>
          <TodoReport></TodoReport>
        </Modal>
      )}

      {!!openModalPlot && (
        <Modal>
          <TodoPlot esModal={true}></TodoPlot>
        </Modal>
      )}

    </React.Fragment>
  );
}

export {AppUI};