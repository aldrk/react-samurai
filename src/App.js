import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Switch, withRouter, Route} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import SidebarContainer from './Components/Sidebar/SidebarContainer';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginContainer from './Components/Login/LoginContainer';
import {compose} from "redux";
import {initializeApp} from "./redux/App-Reducer";
import {connect} from "react-redux";
import Preloader from "./Components/Common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profle/ProfileContainer'));

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
					<Switch>
							<Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
							<Route path='/Profile/:userId?' render={withSuspense(ProfileContainer)}/>
							<Route path='/Dialogs' render={withSuspense(DialogsContainer)}/>
							<Route path='/Users' render={() => <UsersContainer/>}/>
							<Route path='/Login' render={() => <LoginContainer/>}/>
							<Route path='/News' render={News}/>
							<Route path='/Music' render={Music}/>
							<Route path='/Settings' render={Settings}/>
							<Route path='*'
								   render={() => <div>404 NOT FOUND</div>}/>
					</Switch>
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
