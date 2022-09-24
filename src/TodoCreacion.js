import React from 'react'
import './TodoCreacion.css';
import {CreateTodoButton} from './CreateTodoButton';
import todoCreacionImgMobile from './images/glenn-carstens-peters-RLw-UC03Gwc-unsplash_large.jpg';
import todoCreacionImgMedium from './images/glenn-carstens-peters-RLw-UC03Gwc-unsplash_medium.jpg';
import todoCreacionImgLarge from './images/glenn-carstens-peters-RLw-UC03Gwc-unsplash_small.jpg';

function TodoCreacion(){
  return(
    <React.Fragment>
      <div className='TodoCreacion'>
        <form className="formTodoCreacion">
          <label id='label-taskname' htmlFor='taskname'><h1>Create new task</h1></label>
          <section className='cabecera-creacion'>
            <input 
              id="taskname" 
              name="taskname" 
              className="input-taskname"
              placeholder="insert a task name here"/>
            <CreateTodoButton/>
          </section>
        </form>
        <picture className="todoCreacionImg">
            <source media="(min-width: 1000px)" srcSet={todoCreacionImgMedium}/>
            <source media="(min-width: 1000px)" srcSet={todoCreacionImgLarge}/>
            <img src={todoCreacionImgMobile} alt="imagen de creacion de tarea"/>
        </picture>
      </div>
    </React.Fragment>
  )
}

export {TodoCreacion};