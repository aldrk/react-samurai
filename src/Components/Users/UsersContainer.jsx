import {connect} from "react-redux";
import Users from "./Users"
import {
	followAC, setCurrentPageAC, setTotalUsersCount,
	setUsersAC,
	unfollowAC
} from "../../redux/Users-Reducer";

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		currentPage: state.usersPage.currentPage,
		totalUsersCount: state.usersPage.totalUsersCount
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
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (page) => {
			dispatch(setCurrentPageAC(page))
		},
		setTotalUsersCount: (count) => {
			dispatch(setTotalUsersCount(count))
		}
	};
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default  UsersContainer;