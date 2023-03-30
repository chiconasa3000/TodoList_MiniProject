import React from 'react';
import './TodoDetail.css';
import { TodoCabecera } from '../TodoCabecera';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import {TodoSection} from '../TodoSection';
import {TodoSectionItem} from '../TodoSectionItem';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {TodosLoading} from '../TodosLoading';
import {EmptyTodos} from '../EmptyTodos';
import {TodosError} from '../TodosError';
import {CompleteIcon} from '../TodoIcon/CompleteIcon';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoCategory} from '../TodoCategory';
import {TodoMarkDate} from '../TodoMarkDate';
import {TodoProgress} from '../TodoProgress';



function TodoDetail(){
  
  const {
    loading,
    error,
    searchedTodos,
    searchedTodosCat,
    setOpenModalForm,
    completeTodo,
    deleteTodo,
    setProductDetails,
    section,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    setSection,
  } = React.useContext(TodoContext);

  const onEditDetail = (mysection, text, cant, price)=>{
    setOpenModalForm(current=>!current);
    let prodDet = {
      esEdit: true,
      category: mysection,
      description: text,
      quantity: cant,
      uprice: price,
    };
    setProductDetails(prodDet);
  }

  return(
    <React.Fragment>
      <div className='todoDetail'>

        <TodoCabecera>
          <section className='CabeceraMain'>
            <section className="firstHead">
              <TodoCategory/>
            </section>
            <section className='secondHead'>
              <TodoMarkDate/>
              <TodoCounter
                totalTodos={totalTodos}
                completedTodos={completedTodos}
              />
            </section>
          </section>
          <TodoProgress
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </TodoCabecera>

        <TodoSection>
          {searchedTodos.map(todo =>(
            <TodoSectionItem
              setSection={setSection}
              key={Object.keys(todo)[0]}
              title = {Object.keys(todo)[0]}
            />            
          ))}
        </TodoSection>

        <TodoList>
          {error && <TodosError error={error}/>}
          {loading && <TodosLoading/>}
          {(!loading && !searchedTodosCat.length) && <EmptyTodos/>}
          {searchedTodosCat.map(todo =>(
            <div className='itemcontainer' key={todo.text}>
              <div className='containerGen--icon'>
                <CompleteIcon
                  completed={todo.completed}
                  onComplete={()=>completeTodo(todo.text)}
                />
              </div>
              
                <TodoItem 
                  key={todo.text}
                  text={todo.text}
                  cant={todo.cant}
                  price={todo.price}
                  
                  completed={todo.completed}
                  onDelete={()=>deleteTodo(todo.text)}
                  onEdit={()=>onEditDetail(section, todo.text, todo.cant, todo.price)}
                />
              
            </div>            
          ))}
        </TodoList>
        
        
        <CreateTodoButton
          setProductDetails={setProductDetails}
          setOpenModal={setOpenModalForm}
        />
      </div>
    </React.Fragment>
  );
}

export {TodoDetail};