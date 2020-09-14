import React from "react";
import s from './Sidebar.module.css'
import Friend from "./Friend/Friend";

const Sidebar = (props) => {
    let FriendComponents = props.friends.map(friend => <Friend key={friend.id} name={friend.name}/>);
    return (
        <div className={s.sidebar}>
            { FriendComponents }
        </div>
    )
}

export default Sidebar;
