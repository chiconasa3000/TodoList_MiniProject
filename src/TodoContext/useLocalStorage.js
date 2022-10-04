import React from 'react';

//customizado hook
function useLocalStorage(itemName, initialValue){
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  //valor inicial del estado
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        //Cada vez que se aperture la app consigue
        //informacion de localStorage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        //En caso de que no hay informacion
        if(!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(
            initialValue
          ));
          parsedItem = initialValue;
        }else{
          //Si ya hay informacion de la lista
          parsedItem = JSON.parse(localStorageItem);
        }

        //setear el valor por defecto dado por parsedItem (aqui termino de cargar)
        setItem(parsedItem);
        setLoading(false);
      } catch (error){
        setError(error);
      }
    },1000);
  });
  
  //Persistencia de datos cuando completa o elimina items
  const saveItem = (newItem) => {
    try{
      //El array actualizado se convierte a texto
      const stringifiedTodos = JSON.stringify(newItem);
      //se persiste en localstorage
      localStorage.setItem(itemName, stringifiedTodos);
      //y se realiza la actualizacion de la lista
      setItem(newItem);
    }catch(error){
      setError(error);
    }
  };

  //si tienes mas de 3 valores devolver un objeto y ya no array de 2 valores

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export {useLocalStorage}