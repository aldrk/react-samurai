import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, postMessage: 'Hi I`m learning react', likeCount: 5},
    {id: 2, postMessage: 'Is it difficult?', likeCount: 1},
]

let dialogs = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Mary'},
    {id: 3, name: 'Anya'},
    {id: 4, name: 'Liza'},
    {id: 5, name: 'Igor'}
]

let messages = [
    {id: 1, message: 'How do you do?'},
    {id: 2, message: 'Fine, and you?'},
    {id: 3, message: 'Me too'}
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

