import React from "react";
import s from './Sidebar.module.css';
import Sidebar from "./Sidebar";
import StoreContext from "../../StoreContext";

const SidebarContainer = () => {
	return (
	    <StoreContext.Consumer>
            {
                (store) => {
                	let state = store.getState().sidebar;
                    return <Sidebar friends={state.friends}/>
                }
            }
        </StoreContext.Consumer>
	)
}

export default SidebarContainer;
