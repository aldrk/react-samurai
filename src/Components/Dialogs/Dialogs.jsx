import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {
    let dialogsComponents = props.dialogs.map( d => <DialogItem id={ d.id } name={ d.name } key={ d.id }/>);
    let messageComponents = props.messages.map( m => <Message id={ m.id } message={ m.message } key={ m.id }/>);

    const sendMessage = () => {
        props.sendMessage();
    };

    const changeNewMessageText = (event) => {
        let newMessageText = event.target.value;
        props.changeNewMessageText(newMessageText);
    };
    return (
        <div className={ s.dialogs }>
            <div className={ s.dialogsItems }>
                { dialogsComponents }
            </div>
            <div className={ s.messages }>
                { messageComponents }
            </div>
            <div className={ s.newMessage }>
                <textarea value={ props.newMessageText }
                          onChange={ changeNewMessageText }
                          placeholder='Write your message...'/>
                <button onClick={ sendMessage }>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;