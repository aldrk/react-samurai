import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../assets/ValidationComponents/FormControl";
import {maxLengthValidationCreator, minLengthValidationCreator} from "../../utils/validation";

let minLength1 = minLengthValidationCreator(4);
let maxLength150 = maxLengthValidationCreator(150);

const DialogsForm = (props) => {
    const {handleSubmit} = props;
    return(
        <form onSubmit={handleSubmit}>
            <Field validate={[minLength1, maxLength150]} name='message' placeholder='Write your message...' component={Textarea}/>
            <button>Send</button>
        </form>
    )
};

const DialogsReduxFrom = reduxForm({
    form: 'dialogs'
})(DialogsForm);

const Dialogs = (props) => {
    let dialogsComponents = props.dialogs.map( d => <DialogItem id={ d.id } name={ d.name } key={ d.id }/>);
    let messageComponents = props.messages.map( m => <Message id={ m.id } message={ m.message } key={ m.id }/>);


    const addMessage = (data) => {
        props.addMessage(data.message);
    }

    return (
        <div className={ styles.dialogs }>
            <div className={ styles.dialogsItems }>
                { dialogsComponents }
            </div>
            <div className={ styles.messages }>
                { messageComponents }
            </div>
            <div className={ styles.newMessage }>
                <DialogsReduxFrom onSubmit={addMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;