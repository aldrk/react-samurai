import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    let dialogsComponents = props.dialogs.map( d => <DialogItem id={d.id} name={d.name}/>);
    let messageComponents = props.messages.map( m => <Message id={m.id} message={m.message}/>)
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