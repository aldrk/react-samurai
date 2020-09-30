import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getProfile, getStatus, updateStatus} from '../../redux/Profile-Reducer';
import {withRouter} from 'react-router-dom';
import Preloader from '../Common/Preloader/Preloader';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {compose} from "redux";

class ProfileAPIContainer extends React.Component{
	render() {
		return this.props.isFetching
				? <Preloader/>
				: <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>;
	};

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) userId = 11541;
		this.props.getProfile(userId);
		this.props.getStatus(userId);
	};
}

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		isFetching: state.profilePage.isFetching
	};
};

export default compose(
	withRouter,
	withAuthRedirect,
	connect(mapStateToProps,{getProfile, getStatus, updateStatus})
)(ProfileAPIContainer);