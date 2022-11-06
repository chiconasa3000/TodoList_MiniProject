
import React from 'react';
import './TodoItem.css';
import {CompleteIcon} from '../TodoIcon/CompleteIcon';
import {DeleteIcon} from '../TodoIcon/DeleteIcon';

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete}
            />
            
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <div className="item-details">
                <div className="item-detail">
                    <p className="item-cant-label">Qty.</p>
                    <p className="item-cant--value">{`${props.cant} K`}</p>
                </div>
                <div className="item-detail">
                    <p className="item-precio-label">Price</p>
                    <p className="item-precio-value">{`$ ${props.price}`}</p>
                </div>
            </div>
            <DeleteIcon 
                onDelete={props.onDelete}
            />
                
            
        </li>
    );
}

export {TodoItem};