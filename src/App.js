import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <Technoligies />
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a href="#">Home</a>
            <a href="#">News</a>
            <a href="#">Messages</a>
        </div>
    );
}

const Technoligies = () => {
    return (
        <div>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>ReactJS</li>
            </ul>
        </div>
    );
}

export default App;
