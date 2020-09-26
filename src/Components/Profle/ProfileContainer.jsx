import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { getProfile } from '../../redux/Profile-Reducer';
import {withRouter, Redirect} from 'react-router-dom';
import Preloader from '../Common/Preloader/Preloader';

class ProfileAPIContainer extends React.Component{
	render() {
		if (!this.props.isAuth) return <Redirect to={'/login'}/>;
		return this.props.isFetching
				? <Preloader/>
				: <Profile profile={this.props.profile}/>;
	};

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) userId = 2;
		this.props.getProfile(userId);
	};
}

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		isFetching: state.profilePage.isFetching,
		isAuth: state.auth.isAuth
	};
};

const ProfileWithRouterContainer = withRouter(ProfileAPIContainer);

const ProfileContainer = connect(mapStateToProps,{getProfile})(ProfileWithRouterContainer);

export default ProfileContainer;