import React from 'react';
import './TodoBudget.css';
import { TodoContext } from '../TodoContext';
import { TodoQuantity } from '../TodoQuantity';

function TodoBudget(){

  
  const {totalExpenses,newBudgetValue,setNewBudgetValue} = React.useContext(TodoContext);
  const balance = newBudgetValue - totalExpenses;
  const onChangeBudget = (event) => {
    setNewBudgetValue(event.target.value);
  };

  return(
    <React.Fragment>
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
    </React.Fragment>
  );
};

export {TodoBudget};