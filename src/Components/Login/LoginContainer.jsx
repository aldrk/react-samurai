import React from 'react';
import Login from "./Login";
import {compose} from "redux";
import {login} from "../../redux/Auth-Reducer";
import {connect} from "react-redux";

const LoginContainer = (props) => {
	return <Login {...props}/>;
};

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	};
};

export default compose(
	connect(mapStateToProps, {login})
)(LoginContainer);