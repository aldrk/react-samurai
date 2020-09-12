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
    console.log(props.state)
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div>
                    <Navbar/>
                    <Sidebar state={ props.state.Sidebar } dispatch ={ props.dispatch }/>
                </div>
                <div className="app-wrapper-content">
                    <Route exact path='/Dialogs' render={() => <Dialogs state={ props.state.DialogsPage }
                                                                        dispatch={ props.dispatch }/>}/>
                    <Route path='/Profile' render={() => <Profile
                                                                state={ props.state.ProfilePage }
                                                                dispatch={ props.dispatch }/>}/>
                    <Route path='/News' render={ News }/>
                    <Route path='/Music' render={ Music }/>
                    <Route path='/Settings' render={ Settings }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
