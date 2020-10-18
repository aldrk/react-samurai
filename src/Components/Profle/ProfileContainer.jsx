import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';

import {
	getProfile,
	getStatus,
	savePhoto,
	setProfile,
	updateStatus
} from '../../redux/Profile-Reducer';
import {withRouter} from 'react-router-dom';
import Preloader from '../Common/Preloader/Preloader';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {compose} from "redux";

class ProfileAPIContainer extends React.Component{
	render() {
		return this.props.isFetching
				? <Preloader/>
				: <Profile isOwner={!this.props.match.params.userId} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} savePhoto={this.props.savePhoto} setProfile={this.props.setProfile}/>;
	};

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) userId = this.props.userId;
		this.props.getProfile(userId);
		this.props.getStatus(userId);
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			let userId = this.props.match.params.userId;
			if (!userId) userId = this.props.userId;
			this.props.getProfile(userId);
			this.props.getStatus(userId);
		}
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		isFetching: state.profilePage.isFetching,
		userId: state.auth.id
	};
};

export default compose(
	withRouter,
	withAuthRedirect,
	connect(mapStateToProps,{getProfile, getStatus, updateStatus, savePhoto, setProfile})
)(ProfileAPIContainer);