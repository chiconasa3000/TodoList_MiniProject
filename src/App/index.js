import React from 'react';
import {useTodos} from './useTodos';
import {TodoDash} from '../TodoDash';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';
import {TodoReport} from '../TodoReport';
import {TodoDetail} from '../TodoDetail';
import {FiMenu} from 'react-icons/fi';
import {FiPieChart} from 'react-icons/fi';
import {TodoPlot} from '../TodoPlot';
import {TodoCabecera} from '../TodoCabecera';
import {CreateTodoButton} from '../CreateTodoButton';
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
import todoDashImgMobile from '../images/main_picture_shopping.png';
import './App.css';

function App(props) {
  const {
    addTodo,
    editTodo,
    openModalForm,
    openModalReport,
    openModalPlot,
    setOpenModalReport,
    setOpenModalPlot,
    setOpenModalForm,
    productDetails,
    loading,
    error,
    searchedTodos,
    searchedTodosCat,
    completeTodo,
    deleteTodo,
    onEditDetail,
    setProductDetails,
    section,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    setSection,
    totalExpenses,
    newBudgetValue,
    setNewBudgetValue,
    onClickButtonPlot,
    onClickButtonDash,
    } = useTodos();

  return (
    <React.Fragment>
    
      <TodoDash>
        <div className="cabecera-dash">
          <h1>ToDo Shopping</h1>
          <picture className="todoDashImg">
              {/*<source media="(min-width: 1200px)" srcSet={todoDashImgLarge}/>
              <source media="(min-width: 1000px)" srcSet={todoDashImgMedium}/>*/}
              <img src={todoDashImgMobile} alt="logo"/>
          </picture>
        </div>
        <TodoPlot 
          totalExpenses={totalExpenses}
          newBudgetValue={newBudgetValue}
          setNewBudgetValue={setNewBudgetValue}
          setOpenModalPlot={setOpenModalPlot}
          esModal={false}
        />
      </TodoDash>
      
      <button
        className="todolist-buttondash"
        onClick={onClickButtonDash}
      >
        <FiMenu className="todolist-buttondash--icon"/>
      </button>
      
      
      <button 
        onClick={onClickButtonPlot} 
        className="todobudget-button">
        <FiPieChart className="todobudget-icon"/>
      </button>
      

      <TodoDetail>
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
      </TodoDetail>

      {!!openModalForm && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            editTodo={editTodo}
            setOpenModalForm={setOpenModalForm}
            productDetails={productDetails}
          />
        </Modal>
      )}

      {!!openModalReport && (
        <Modal>
          <TodoReport
            totalExpenses={totalExpenses}
            newBudgetValue={newBudgetValue}
            setNewBudgetValue={setNewBudgetValue}
            setOpenModalReport={setOpenModalReport}
            esModal={true}
          />
        </Modal>
      )}

      {!!openModalPlot && (
        <Modal>
          <TodoPlot 
            totalExpenses={totalExpenses}
            newBudgetValue={newBudgetValue}
            setNewBudgetValue={setNewBudgetValue}
            setOpenModalPlot={setOpenModalPlot}
            esModal={true}
          />
        </Modal>
      )}

    </React.Fragment>
  );
}

export default App;
