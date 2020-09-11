import React from 'react';
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

const rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={ state }
                         addPost={ store.addPost.bind(store) }
                         changeNewPostText={ store.changeNewPostText.bind(store) }/>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);