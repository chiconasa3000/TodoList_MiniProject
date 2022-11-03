import React from 'react'
import './TodoCreacion.css';
import {CreateMainTodoButton} from '../CreateMainTodoButton';
import todoCreacionImgMobile from '../images/glenn-carstens-peters-RLw-UC03Gwc-unsplash_small.jpg';
import todoCreacionImgMedium from '../images/glenn-carstens-peters-RLw-UC03Gwc-unsplash_medium.jpg';
import todoCreacionImgLarge from '../images/glenn-carstens-peters-RLw-UC03Gwc-unsplash_large.jpg';

function TodoCreacion(){
  return(
    <React.Fragment>
      <div className='TodoCreacion'>
        
        <CreateMainTodoButton/>

        <picture className="todoCreacionImg">
            <source media="(min-width: 1200px)" srcSet={todoCreacionImgLarge}/>
            <source media="(min-width: 1000px)" srcSet={todoCreacionImgMedium}/>
            <img src={todoCreacionImgMobile} alt="imagen de creacion de tarea"/>
        </picture>
      </div>
    </React.Fragment>
  )
}

export {TodoCreacion};