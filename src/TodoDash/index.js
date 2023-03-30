import React from 'react'
import './TodoDash.css';
import {TodoPlot} from '../TodoPlot';
import todoDashImgMobile from '../images/main_picture_shopping.png';


function TodoDash(props){
  return(
    <React.Fragment>
      <div className='TodoDash'>
        <div className="cabecera-dash">
          <h1>ToDo Shopping</h1>
          <picture className="todoDashImg">
              {/*<source media="(min-width: 1200px)" srcSet={todoDashImgLarge}/>
              <source media="(min-width: 1000px)" srcSet={todoDashImgMedium}/>*/}
              <img src={todoDashImgMobile} alt="logo"/>
          </picture>
        </div>
        <TodoPlot esModal={false}/>
      </div>
    </React.Fragment>
  )
}

export {TodoDash};