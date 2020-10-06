import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logout} from '../../redux/Auth-Reducer';

class HeaderAPIContainer extends React.Component{
	render() {
		return <Header {...this.props}/>
	};
}

const mapStateToProps = (state) => {
	let {login, isAuth} = state.auth;
	return {
		login,
		isAuth
	};
};

let HeaderContainer = connect(mapStateToProps, {logout})(HeaderAPIContainer);

export default HeaderContainer;