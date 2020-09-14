import {connect} from "react-redux";
import Users from "./Users"
import {followAC, setUsers, unfollowAC} from "../../redux/Users-Reducer";

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsers(users))
		}
	};
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default  UsersContainer;