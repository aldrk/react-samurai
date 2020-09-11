import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profle/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div>
                    <Navbar/>
                    <Sidebar state={props.state.Sidebar}/>
                </div>
                <div className="app-wrapper-content">
                    <Route exact path='/Dialogs' render={() => <Dialogs state={props.state.DialogsPage}/>}/>
                    <Route path='/Profile' render={() => <Profile state={props.state.ProfilePage} addPost={props.addPost} changeNewPostText={props.changeNewPostText}/>}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
