import React from 'react';
import './TodoSectionItem.css';

function TodoSectionItem({setSection,title}){


  const onClick = (event)=>{
    setSection(event.target.innerText);
  };

  return(
    <div>
      <li onClick={onClick} className='todosectionitem'>{title}</li>
    </div>
  );
}

export {TodoSectionItem};
