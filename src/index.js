import React from 'react';
import store from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";

const rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={ state }
                         dispatch={ store.dispatch.bind(store) } />, document.getElementById('root'));
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);