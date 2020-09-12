import React from "react";
import s from './Sidebar.module.css'
import Friend from "./Friend/Friend";

const Sidebar = (props) => {
    let FriendComponents = props.state.friends.map(friend => <Friend
                                                                name={friend.name} dispatch={ props.dispatch }/>);
    return (
        <div className={s.sidebar}>
            { FriendComponents }
        </div>
    )
}

export default Sidebar;
