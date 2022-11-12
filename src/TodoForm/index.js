import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';
import {TodoQuantity} from '../TodoQuantity';

function TodoForm(props){
  const [newProductDescription, setProductDescription] = React.useState(props.productDetails.description);
  const [newCategory, setCategory] = React.useState(props.productDetails.category);
  const [newCantidadValue, setNewCantidadValue]=React.useState(props.productDetails.quantity);
  const [newPrecioValue, setNewPrecioValue]=React.useState(props.productDetails.uprice);

  const {
    addTodo,
    editTodo,
    setOpenModalForm,
    productDetails,
  } = React.useContext(TodoContext);

  const onChangeProducto = (event) => {
    setProductDescription(event.target.value);
  };
  
  const onChangeCategory = (event) => {
    setCategory(event.target.value);
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
    if(productDetails.esEdit !== true){
      addTodo(newCategory,newProductDescription,newCantidadValue,newPrecioValue);
    }else{
      editTodo(props.productDetails.category,newCategory,props.productDetails.description,newProductDescription,newCantidadValue,newPrecioValue);
    }
    
    //cerrar con algo escrito en el modal
    setOpenModalForm(false);
  };

  return(
    <form className="formCreateTodo" onSubmit={onSubmit}>

      <label htmlFor='categoryname'>Asigna o crea una categoria</label>
      <input id="categoryname" name="categoryname" type="text"
        value={newCategory}
        onChange={onChangeCategory}
        placeholder="Vegetables"
      />

      <label htmlFor='prodDes'>Descripcion de Producto</label>
      <textarea id="prodDes"
        value={newProductDescription}
        onChange={onChangeProducto}
        placeholder="Tomates"
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