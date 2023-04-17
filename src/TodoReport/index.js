import React from 'react';
import './TodoReport.css';
import { TodoQuantity } from '../TodoQuantity';

function TodoReport({totalExpenses,newBudgetValue,setNewBudgetValue,setOpenModalReport,esModal}){

  const balance = newBudgetValue - totalExpenses;

  const onChangeBudget = (event) => {
    setNewBudgetValue(event.target.value);
  };

  const onCancel = () => {
    //cerrar modal sin escribir nada
    setOpenModalReport(false);
  };

  const onSubmit = (event) => {
    //recargar la pagina (avoid)
    //evitar la recarga de pagina del propio evento
    event.preventDefault();
  };

  return(
    <div className="todoreport">
      <form onSubmit={onSubmit}>
        <div className='todobudget'>
          <TodoQuantity 
            itemCantValue={newBudgetValue} 
            setItemCantValue={setNewBudgetValue} 
            onChange={onChangeBudget}
            label="Cash:" 
            esEntero={false} 
            initialVal="500.0"
          />
        </div>
        <div className='todobudget-details'>
          <div className='todobudget-detail'>
            <p>Expenses:</p>
            <p>{`$ ${totalExpenses.toFixed(2)}`}</p>
          </div>
          <div className='todobudget-detail'>
            <p>Balance:</p>
            <p>{`$ ${balance.toFixed(2)}`}</p>
          </div>
        </div>
        {(esModal)? 
          <div className='TodoBudget-buttonContainer'>
            <button 
              type="button"
              className='TodoBudget-button TodoBudget-button--cancel'
              onClick={onCancel}
            >
              Cancelar
            </button>
          </div>
          : 
          <div></div>
        }
      </form>
    </div>
  );
};

export {TodoReport};