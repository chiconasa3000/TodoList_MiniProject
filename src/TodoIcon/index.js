import React from 'react';
import './TodoIcon.css';

//import {ReactComponent as CheckSVG} from './icons/check.svg';
//import {ReactComponent as DeleteSVG} from './icons/delete2.svg';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import {BsTrash} from 'react-icons/bs';

function TodoIcon({type, color, onClick}){
  const iconTypes = {
    "check": color => (
      <BsFillCheckCircleFill className='Icon-svg Icon-svg--check' fill={color}/>
    ),
    "delete": color => (
      <BsTrash className='Icon-svg Icon-svg--delete' fill={color}/>
    ),
  };

  return(
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {/*Adicionalmente de la key le envias un parametro 
      por ser el valor del objeto una funcion*/}
      {iconTypes[type](color)}
    </span>
  );  
}

export {TodoIcon};