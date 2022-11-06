import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';
import {TodoQuantity} from '../TodoQuantity';

function TodoForm(){

  const [newTodoValue, setNewTodoValue] = React.useState('');
  const [newCantidadValue, setNewCantidadValue]=React.useState(0);
  const [newPrecioValue, setNewPrecioValue]=React.useState(0.0);

  const {
    addTodo,
    setOpenModalForm,
  } = React.useContext(TodoContext);

  const onChangeProducto = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onChangeCantidad = (event) => {
    setNewCantidadValue(event.target.value);
  };

  const onChangePrecio = (event) => {
    setNewPrecioValue(event.target.value);
  };

  const onCancel = () => {
    //cerrar modal sin escribir nada
    setOpenModalForm(false);
  };

  const onSubmit = (event) => {
    //recargar la pagina (avoid)
    //evitar la recarga de pagina del propio evento
    event.preventDefault();

    addTodo(newTodoValue,newCantidadValue,newPrecioValue);
    
    //cerrar con algo escrito en el modal
    setOpenModalForm(false);
  };

  return(
    <form className="formCreateTodo" onSubmit={onSubmit}>
      <label>Escribe tu todo</label>
      <textarea
        value={newTodoValue}
        onChange={onChangeProducto}
        placeholder="Comprar cebolla para el almuerzo"
      />

      <TodoQuantity 
        itemCantValue={newCantidadValue} 
        setItemCantValue={setNewCantidadValue} 
        onChange={onChangeCantidad} 
        label="Cantidad" 
        esEntero={true} 
        initialVal="0"
      />

      <TodoQuantity 
        itemCantValue={newPrecioValue} 
        setItemCantValue={setNewPrecioValue} 
        onChange={onChangePrecio} 
        label="Precio" 
        esEntero={false} 
        initialVal="0.0"
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