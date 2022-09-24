import React from 'react'
import './TodoProgress.css'

const valorPorcentaje = 20;
function TodoProgress(){
  return(
    <section className='TodoProgress'>
      <label htmlFor="bar-TodoProgress">Progress completed: {valorPorcentaje}%</label>
      <progress id='bar-TodoProgress' value='20' max='100'>40%</progress>
    </section>
  );
}

export {TodoProgress}