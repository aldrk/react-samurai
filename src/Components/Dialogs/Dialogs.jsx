import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";



const Dialogs = (props) => {
    let dialogsComponents = props.state.dialogs.map( d => <DialogItem id={d.id} name={d.name}/>);
    let messageComponents = props.state.messages.map( m => <Message id={m.id} message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsComponents }
            </div>
            <div className={s.messages}>
                { messageComponents }
                <NewMessage />
            </div>
        </div>
    );
}

export default Dialogs;