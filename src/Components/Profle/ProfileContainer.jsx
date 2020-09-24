import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setProfileInfo, toggleIsFetching} from '../../redux/Profile-Reducer';
import {withRouter} from 'react-router-dom';
import Preloader from '../Common/Preloader/Preloader';
import {profileAPI} from '../../Api/profileAPI';

class ProfileAPIContainer extends React.Component{
	render() {
		return this.props.isFetching
				? <Preloader/>
				: <Profile profile={this.props.profile}/>;
	};

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId){
			userId = 2;
		}
		this.props.toggleIsFetching(true);
		profileAPI(userId).then(data => {
				this.props.toggleIsFetching(false);
				this.props.setProfileInfo(data);
			})
			.catch(error => {
				this.props.toggleIsFetching(false);
				console.log(error);
			})
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		isFetching: state.profilePage.isFetching
	};
};

const ProfileWithRouterContainer = withRouter(ProfileAPIContainer);

const ProfileContainer = connect(mapStateToProps,{setProfileInfo, toggleIsFetching})(ProfileWithRouterContainer);

export default ProfileContainer;