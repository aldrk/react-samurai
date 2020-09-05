import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profle/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                {/*<Profile />*/}
                <Dialogs />
            </div>
        </div>
    );
}

export default App;
