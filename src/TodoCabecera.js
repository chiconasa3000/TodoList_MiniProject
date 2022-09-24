import React from 'react';
import './TodoCabecera.css';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoCategory} from './TodoCategory';
import {TodoMarkDate} from './TodoMarkDate';
import {TodoProgress} from './TodoProgress';

function TodoCabecera(props){
  return(
    <React.Fragment>
      <div className="TodoCabecera">
        <section className='CabeceraMain'>
          <section className="firstHead">
            <TodoCategory/>
          </section>
          <section className='secondHead'>
            <TodoMarkDate/>
            <TodoCounter 
              total = {props.total}
              completed = {props.completed}
            />
          </section>
        </section>
        <TodoProgress/>
        <TodoSearch
          searchValue = {props.searchValue}
          setSearchValue = {props.setSearchValue}
        />
      </div>
    </React.Fragment>
  );
}

export {TodoCabecera};