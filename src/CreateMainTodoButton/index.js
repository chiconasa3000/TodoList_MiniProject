import './CreateMainTodoButton.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function CreateMainTodoButton(){
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodo,
  } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    //recargar la pagina (avoid)
    //evitar la recarga de pagina del propio evento
    event.preventDefault();
    if(newTodoValue !== ""){
      addTodo(newTodoValue);
    }
    setNewTodoValue("");
  };

  return(
    <form className="formTodoCreacion"  onSubmit={onSubmit}>
      <label id='label-taskname' htmlFor='taskname'><h1>Create New ToDo</h1></label>
      <section className='cabecera-creacion'>
        <input
          value={newTodoValue}
          onChange={onChange}
          id="taskname" 
          name="taskname" 
          className="input-taskname"
          placeholder="insert a task name here"/>
        <button
          type="submit"
          className='CreateMainTodoButton'
        >
          <span>+</span>
        </button>
      </section>
    </form>
  );
}

export {CreateMainTodoButton};