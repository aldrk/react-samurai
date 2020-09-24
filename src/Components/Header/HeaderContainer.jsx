import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {setUserData} from '../../redux/Auth-Reducer';
import * as axios from 'axios';

class HeaderAPIContainer extends React.Component{
	render() {
		return <Header {...this.props}/>
	};
	componentDidMount() {
		axios
			.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
				withCredentials: true
			})
			.then(response => {
				if (response.data.resultCode === 0) {
					let {user, login, id} = response.data.data;
					this.props.setUserData(user, login, id);
				}
			})
	};
}

const mapStateToProps = (state) => {
	let {login, isAuth} = state.auth;
	return {
		login,
		isAuth
	};
};

let HeaderContainer = connect(mapStateToProps, {setUserData})(HeaderAPIContainer);

export default HeaderContainer;