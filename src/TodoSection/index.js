import React from 'react';
import './TodoSection.css';

function TodoSection(props){
  return(
    <React.Fragment>
      <section className='TodoSection'>
          <ul>
              {props.children}
          </ul>
      </section>
    </React.Fragment>
  );
}

export {TodoSection};