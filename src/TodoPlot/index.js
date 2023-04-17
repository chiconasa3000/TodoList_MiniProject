import React from 'react';

import { TodoQuantity } from '../TodoQuantity';
import './TodoPlot.css';

import Plot from 'react-plotly.js';

function TodoPlot({totalExpenses,newBudgetValue,setNewBudgetValue,setOpenModalPlot,esModal}){

  const balance = newBudgetValue - totalExpenses;
  const ultimateColors = ['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)']
  const initialData = [
    {
      values: [totalExpenses,balance],
      labels: ['Expenses','Balance'],
      name: 'Cash Report',
      textinfo: "label+percent",
      textposition: "inside",
      automargin: true,
      hole: '.4',
      type: 'pie',
      textfont:{size:16},
      marker: {
        colors: ultimateColors
      },
    }
  ];

  const initialLayout = {
    title: 'Balance Shopping Progress',
    annotations: [{
      font:{
        size:16
      },
      showarrow: false,
      text: `Budget<br>${newBudgetValue}`,
      x: 0.50,
      y: 0.5
    }],
    width: 300, 
    height: 300,
    margin: {"t": 40, "b": 20, "l": 5, "r": 5},
    showlegend: false,
    paper_bgcolor: 'rgba(243,238,233,1)',
  };


  const onChangeBudget = (event) => {
    setNewBudgetValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModalPlot(false);
  };

  return(
    <React.Fragment>
      <div className='todoplot'>
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
        <Plot
          data={initialData}
          layout={initialLayout}
          config={{responsive: true,displaylogo: false,modeBarButtonsToRemove: ['toImage']}}
          onInitialized={(figure) => this.setState(figure)}
          onUpdate={(figure) => this.setState(figure)}
        />
        {!!esModal &&(
          <div className='TodoBudget-buttonContainer'>
            <button 
              type="button"
              className='TodoBudget-button TodoBudget-button--cancel'
              onClick={onCancel}
            >
              Cancelar
            </button>
          </div>
        )}
        
      </div>
    
    </React.Fragment>
  );
}

export {TodoPlot}