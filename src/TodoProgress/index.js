import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoProgress.css'

function TodoProgress(){
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  let currentProgress = 0;
  if(totalTodos !== 0)
    currentProgress = (completedTodos/totalTodos*100).toFixed(1);
  return(
    <section className='TodoProgress'>
      <label htmlFor="bar-TodoProgress">Progress: {currentProgress}%</label>
      <progress id='bar-TodoProgress' value={currentProgress} max='100'></progress>
    </section>
  );
}

export {TodoProgress}