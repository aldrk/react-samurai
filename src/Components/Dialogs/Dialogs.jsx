import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
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

let dialogs = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Mary'},
    {id: 3, name: 'Anya'},
    {id: 4, name: 'Liza'},
    {id: 5, name: 'Igor'}
]

let messages = [
    {id: 1, message: 'How do you do?'},
    {id: 2, message: 'Fine, and you?'},
    {id: 3, message: 'Me too'}
]

let dialogsComponents = dialogs.map( d => <DialogItem id={d.id} name={d.name}/>);
let messageComponents = messages.map( m => <Message id={m.id} message={m.message}/>)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsComponents }
            </div>
            <div className={s.messages}>
                { messageComponents }
            </div>
        </div>
    );
}

export default Dialogs;