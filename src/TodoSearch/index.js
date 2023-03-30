import './TodoSearch.css';
import React from 'react';

/*Este sera un componente funcional*/
function TodoSearch({searchValue,setSearchValue} ){

    const onSearchValueChange = (event) => {
        event.preventDefault();
        setSearchValue(event.target.value);
    };

    const onSubmit=(event)=>{
        event.preventDefault();
    }

    return(
        <form id="formTodoSearch" onSubmit={onSubmit}>
            {/*<label for="fsearch">Busqueda de Tarea: </label>*/}
            <input 
                type="search" 
                id="fsearch" 
                className="TodoSearch"  
                name="fsearch" 
                placeholder="Search Product"
                value={searchValue}
                onChange={onSearchValueChange}
            />
            {/*<span className={`Icon-search Icon-search--active}`}>🔍</span>*/}
        </form>
    );
}

export {TodoSearch};