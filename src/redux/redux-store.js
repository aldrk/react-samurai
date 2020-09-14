import {combineReducers, createStore} from "redux";
import profileReducer from "./Profile-Reducer";
import dialogReducer from "./Dialog-Reducer";
import sidebarReducer from "./Sidebar-Reducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogReducer,
	sidebar: sidebarReducer
})

export let store = createStore(reducers);

window.state = store.getState()