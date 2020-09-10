import React from "react";
import s from './NewMessage.module.css';

const NewMessage = (props) => {
    let newMessage = React.createRef();
    const sendMessage = () => {
        let newMessageText = newMessage.current.value;
        alert(newMessageText);
    }

    return (
        <div className={s.newMessage}>
            <textarea placeholder='Write your message...' ref={newMessage}></textarea>
            <button onClick={ sendMessage }>Send</button>
        </div>
    );
}

export default NewMessage;