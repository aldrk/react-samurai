import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './Profile-Reducer';
import dialogReducer from './Dialog-Reducer';
import sidebarReducer from './Sidebar-Reducer';
import usersReducer from './Users-Reducer';
import authReducer from './Auth-Reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer
});

export let store = createStore(reducers, applyMiddleware(thunk));