import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={`/dialogs/1${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id="1" name='Dima' />
                <DialogItem id="2" name='Mary' />
                <DialogItem id="3" name='Anya' />
                <DialogItem id="4" name='Liza' />
                <DialogItem id="5" name='Igor' />
            </div>
            <div className={s.messages}>
                <Message message='How do you do?'/>
                <Message message='Fine, and you?'/>
                <Message message='Me too'/>
            </div>
        </div>
    );
}

export default Dialogs;