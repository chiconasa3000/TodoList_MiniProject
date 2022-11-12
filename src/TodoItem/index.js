
import React from 'react';
import './TodoItem.css';

import {DeleteIcon} from '../TodoIcon/DeleteIcon';
import { EditIcon } from '../TodoIcon/EditIcon';

function TodoItem(props) {

    const [showActions, setShowActions] = React.useState(false);

    const onClickActions=()=>{
        setShowActions((showaction)=>!showaction);
    };

    return (
        <React.Fragment>
            <li className="TodoItem" onClick={onClickActions}>
                
                
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
                {!!showActions &&(
                    <React.Fragment>
                        <DeleteIcon 
                            onDelete={props.onDelete}
                        />
                        <EditIcon
                            onEdit={props.onEdit}
                        />
                    </React.Fragment>
                )}
                
                    
                
            </li>
        </React.Fragment>
    );
}

export {TodoItem};