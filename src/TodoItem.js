
import React from 'react';
import {useState} from 'react';
import './TodoItem.css';



function TodoItem(props) {
    let completed = props.todos[props.indexItem].completed;

    const onComplete = () => {  
        
        const newArr = (completed === true) 
            ? 
            props.todos.map(obj=>{
                if(obj.text === props.text){
                    return {...obj, completed:false};
                }
                return obj;
            })
            :
            props.todos.map(obj=>{
                if(obj.text === props.text){
                    return {...obj, completed:true};
                }
                return obj
            });
        props.setTodos(newArr);
        /* el valor de props.todos sigue con el valor anterior */
        /* pero ya cambia su estado e incluso el contador de todos filtrado y sin filtrat*/
        //console.log(props.todos);
        
    };

    const onDelete = () => {
        alert('Borraste la tarea ' + props.text);
    };

    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onComplete}
            >
                ✓
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
                className='Icon Icon-delete'
                onClick={onDelete}
            >
                x
            </span>
        </li>
    );
}

export {TodoItem};