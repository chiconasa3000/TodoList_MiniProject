import './TodoSearch.css';
import React from 'react';

/*Este sera un componente funcional*/
function TodoSearch({searchValue,setSearchValue}){

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return(
        <form id="formTodoSearch">
            {/*<label for="fsearch">Busqueda de Tarea: </label>*/}
            <input 
                type="search" 
                id="fsearch" 
                className="TodoSearch"  
                name="fsearch" 
                placeholder="Search ToDo"
                value={searchValue}
                onChange={onSearchValueChange}
            />
            <span className={`Icon-search Icon-search--active}`}>🔍</span>
        </form>
    );
}

export {TodoSearch};