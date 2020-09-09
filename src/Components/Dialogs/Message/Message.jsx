import React from "react";
import s from "./Message.module.css";


let count = 1;

let setClass = () => {
    count++;
    return (count % 2 === 0) ? s.left : s.right;
}

const Message = (props) => {
    return (
        <div className={`${s.message} ${setClass()}`}>
            {props.message}
        </div>
    );
}

export default Message;