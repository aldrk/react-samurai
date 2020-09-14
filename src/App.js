import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profle/Profile";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import SidebarContainer from "./Components/Sidebar/SidebarContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

const App = () => {
    return (
            <div className="app-wrapper">
                <Header/>
                <div>
                    <Navbar/>
                    {<SidebarContainer/>}
                </div>
                <div className="app-wrapper-content">
                    <Route exact path='/Dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/Profile' render={() => <Profile/>}/>
                    <Route path='/Users' render={() => <UsersContainer/>}/>
                    <Route path='/News' render={ News }/>
                    <Route path='/Music' render={ Music }/>
                    <Route path='/Settings' render={ Settings }/>
                </div>
            </div>
    );
}

export default App;
