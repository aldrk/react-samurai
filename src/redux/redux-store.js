import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './Profile-Reducer';
import dialogReducer from './Dialog-Reducer';
import sidebarReducer from './Sidebar-Reducer';
import usersReducer from './Users-Reducer';
import authReducer from './Auth-Reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './App-Reducer';

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer
});

export let store = createStore(reducers, applyMiddleware(thunk));