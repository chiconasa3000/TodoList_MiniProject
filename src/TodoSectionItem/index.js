import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSectionItem.css';

function TodoSectionItem(props){

  const {setSection} = React.useContext(TodoContext);

  const onClick = (event)=>{
    setSection(event.target.innerText);
  };

  return(
    <div>
      <li onClick={onClick} className='todosectionitem'>{props.title}</li>
    </div>
  );
}

export {TodoSectionItem};
