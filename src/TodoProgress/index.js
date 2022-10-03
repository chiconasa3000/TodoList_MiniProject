import React from 'react'
import './TodoProgress.css'

function TodoProgress({ total, completed }){
  let currentProgress = (completed/total*100).toFixed(1);
  return(
    <section className='TodoProgress'>
      <label htmlFor="bar-TodoProgress">Progress completed: {currentProgress}%</label>
      <progress id='bar-TodoProgress' value={currentProgress} max='100'></progress>
    </section>
  );
}

export {TodoProgress}