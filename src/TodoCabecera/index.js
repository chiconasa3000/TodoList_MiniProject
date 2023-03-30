import React from 'react';
import './TodoCabecera.css';
function TodoCabecera({children}){
  return(
    <div className="TodoCabecera">
      {children}
    </div>
  );
}

export {TodoCabecera};