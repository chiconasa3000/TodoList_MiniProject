import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm(){

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    //cerrar modal sin escribir nada
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    //recargar la pagina (avoid)
    //evitar la recarga de pagina del propio evento
    event.preventDefault();
    addTodo(newTodoValue);
    //cerrar con algo escrito en el modal
    setOpenModal(false);
  };

  return(
    <form className="formCreateTodo" onSubmit={onSubmit}>
      <label>Escribe tu todo</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className='TodoForm-buttonContainer'>
        <button 
          type="button"
          className='TodoForm-button TodoForm-button--cancel'
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className='TodoForm-button TodoForm-button--add'
        >
          Add Todo
        </button>
      </div>
    </form>
  );
}
export {TodoForm}