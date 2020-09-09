import React from "react";
import s from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" alt="avatar"/>
            <span>{props.name}</span>
        </div>
    )
}

export default Friend;
