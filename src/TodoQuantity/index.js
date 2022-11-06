import React from 'react'
import {BiCaretDown} from 'react-icons/bi';
import {BiCaretUp} from 'react-icons/bi';
import './TodoQuantity.css';

function TodoQuantity(props){

  return(
    <div className="container-cant">
      <label htmlFor="itemCantValue">{props.label}</label>
      <input 
        id="itemCantValue"
        type="number" 
        min={props.initialVal}
        step="0.1"
        value={props.itemCantValue} 
        onChange={props.onChange}  
      />
      <div className="container-cant--buttons">
        
        <button 
          onClick={(e) => {
            e.preventDefault();
            if(props.esEntero){
              props.setItemCantValue(parseInt(props.itemCantValue) + 1);
            }else{
              props.setItemCantValue(Math.round((parseFloat(props.itemCantValue) + 0.1)*10)/10);
            }
          }}>
          <BiCaretUp fill={"gray"}/>
        </button>
        
        <button 
          onClick={(e) => {
            e.preventDefault();
            if(props.esEntero===true && parseInt(props.itemCantValue)>0){
              props.setItemCantValue(parseInt(props.itemCantValue) - 1);
            }else if(parseFloat(props.itemCantValue)>0.0){
              props.setItemCantValue(Math.round((parseFloat(props.itemCantValue) - 0.1)*10)/10);
            }
          }}>
          <BiCaretDown fill={"gray"}/>
        </button>
      </div>
    </div>
  );
}

export {TodoQuantity};

