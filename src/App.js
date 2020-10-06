import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {withRouter, Route} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import ProfileContainer from './Components/Profle/ProfileContainer';
import SidebarContainer from './Components/Sidebar/SidebarContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginContainer from './Components/Login/LoginContainer';
import {compose} from "redux";
import {initializeApp} from "./redux/App-Reducer";
import {connect} from "react-redux";
import Preloader from "./Components/Common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    };

    render() {
        if (!this.props.isInitialized) return <Preloader/>
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div>
                    <Navbar/>
                    {<SidebarContainer/>}
                </div>
                <div className="app-wrapper-content">
                    <Route exact path='/Dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/Users' render={() => <UsersContainer/>}/>
                    <Route path='/Login' render={() => <LoginContainer/>}/>
                    <Route path='/News' render={News}/>
                    <Route path='/Music' render={Music}/>
                    <Route path='/Settings' render={Settings}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isInitialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
