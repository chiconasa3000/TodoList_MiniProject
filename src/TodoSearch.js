import react from 'react';
import './TodoSearch.css';
import React, {useState} from 'react';

/*Esto era en el pasado*/
/*class componente extends React.Component{
    constructor(){
        this.state = {
            patito: 'Juan'
        };
    }
    render(){
        return(
            <div onClick={()=> this.setState('Enrique')}>{this.state.patito}</div>
        )
    }
}*/
/*Este sera un componente funcional*/
function TodoSearch({searchValue,setSearchValue}){
    //declarando un hook devuelve array
    //getter y setter del estado
    //const [searchValue, setSearchValue] = useState('');

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
            <button className={`Icon-search Icon-search--active}`}>🔍</button>
        </form>
    );
}

export {TodoSearch};