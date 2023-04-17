import React from 'react';
import './TodoDetail.css';


function TodoDetail({children}){
  return(
    <div className='todoDetail'>
      {children}
    </div>
  );
}

export {TodoDetail};