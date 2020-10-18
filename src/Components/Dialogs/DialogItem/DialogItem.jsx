import React from 'react';
import s from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = ({id, name}) => {
    return (
        <div className={ s.dialog }>
            <NavLink to={`/dialogs/${ id }`}>{ name }</NavLink>
        </div>
    );
};

export default DialogItem;