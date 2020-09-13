import React from 'react';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";

const rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<StoreContext.Provider value={store}>
				<App/>
			</StoreContext.Provider>
		</BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree();

store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state);
});