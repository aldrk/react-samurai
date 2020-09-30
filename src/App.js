import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import ProfileContainer from './Components/Profle/ProfileContainer';
import SidebarContainer from './Components/Sidebar/SidebarContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';

const App = () => {
    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div>
                    <Navbar/>
                    {<SidebarContainer/>}
                </div>
                <div className="app-wrapper-content">
                    <Route exact path='/Dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/Profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/Users' render={() => <UsersContainer />}/>
                    <Route path='/Login' render={ Login } />
                    <Route path='/News' render={ News }/>
                    <Route path='/Music' render={ Music }/>
                    <Route path='/Settings' render={ Settings }/>
                </div>
            </div>
    );
};

export default App;
