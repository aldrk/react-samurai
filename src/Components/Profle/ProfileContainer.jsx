import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileInfo} from "../../redux/Profile-Reducer";
import * as axios from "axios";

class ProfileAPIContainer extends React.Component{
	render() {
		return <Profile profile={this.props.profile}/>
	}

	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/${3}`)
			.then(response => {
				this.props.setProfileInfo(response.data);
			});
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile
	};
}

const ProfileContainer = connect(mapStateToProps,{setProfileInfo})(ProfileAPIContainer);

export default ProfileContainer;