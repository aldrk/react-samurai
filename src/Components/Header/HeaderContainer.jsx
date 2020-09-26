import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {authMe} from '../../redux/Auth-Reducer';

class HeaderAPIContainer extends React.Component{
	render() {
		return <Header {...this.props}/>
	};
	componentDidMount() {
		this.props.authMe();
	};
}

const mapStateToProps = (state) => {
	let {login, isAuth} = state.auth;
	return {
		login,
		isAuth
	};
};

let HeaderContainer = connect(mapStateToProps, {authMe})(HeaderAPIContainer);

export default HeaderContainer;