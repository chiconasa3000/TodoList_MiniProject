import React from 'react'
import './TodoMarkDate.css'

function TodoMarkDate(){
  const today = new Date();
  return(
    <section className='TodoMarkDate'>
      <p>{today.toDateString()}</p>
    </section>
  );
}

export {TodoMarkDate};