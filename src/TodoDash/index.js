import React from 'react'
import './TodoDash.css';

/*import todoDashImgMobile from '../images/glenn-carstens-peters-RLw-UC03Gwc-unsplash_small.jpg';
import todoDashImgMedium from '../images/glenn-carstens-peters-RLw-UC03Gwc-unsplash_medium.jpg';
import todoDashImgLarge from '../images/glenn-carstens-peters-RLw-UC03Gwc-unsplash_large.jpg';*/
import todoDashImgMobile from '../images/main_picture_shopping.png';
import {FiPieChart} from 'react-icons/fi';
//import {TodoBudget} from '../TodoBudget';
import { TodoContext } from '../TodoContext';
import {TodoPlot} from '../TodoPlot';
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