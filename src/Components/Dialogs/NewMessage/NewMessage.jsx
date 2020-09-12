import React from "react";
import s from './NewMessage.module.css';
import {
    addMessageActionCreator,
    changeNewMessageTextActionCreator
} from "../../../redux/Dialog-Reducer";
;

const NewMessage = (props) => {
    const sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    const changeNewMessageText = (event) => {
        let newMessageText = event.target.value;
        props.dispatch(changeNewMessageTextActionCreator(newMessageText));
    };

    return (
        <div className={s.newMessage}>
            <textarea value={ props.newMessageText }
                      onChange={ changeNewMessageText }
                      placeholder='Write your message...'/>
            <button onClick={ sendMessage }>Send</button>
        </div>
    );
}

export default NewMessage;