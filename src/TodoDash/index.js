import React from 'react'
import './TodoDash.css';

function TodoDash({children}){
  return(
      <div className='TodoDash'>
        {children}
      </div>
  )
}

export {TodoDash};