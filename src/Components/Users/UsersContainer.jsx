import {connect} from 'react-redux';
import Users from "./Users";
import {
	follow, setCurrentPage, setTotalUsersCount,
	setUsers, toggleIsFetching,
	unfollow, toggleIsFetchingFollowing
} from '../../redux/Users-Reducer';
import React from 'react';
import Preloader from "../Common/Preloader/Preloader.jsx";
import {usersContainerAPI} from "../../Api/usersAPI";


const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		currentPage: state.usersPage.currentPage,
		totalUsersCount: state.usersPage.totalUsersCount,
		isFetching: state.usersPage.isFetching,
		isFetchingFollowing: state.usersPage.isFetchingFollowing
	};
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userId) => {
// 			dispatch(followAC(userId));
// 		},
// 		unfollow: (userId) => {
// 			dispatch(unfollowAC(userId));
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users));
// 		},
// 		setCurrentPage: (page) => {
// 			dispatch(setCurrentPageAC(page));
// 		},
// 		setTotalUsersCount: (count) => {
// 			dispatch(setTotalUsersCountAC(count));
// 		},
// 		toggleIsFetching: (isFetching) => {
// 			dispatch(toggleIsFetchingAC(isFetching));
// 		}
// 	};
// }

class UsersAPIContainer extends React.Component {
	render() {
		return (this.props.isFetching? <Preloader/>: <Users
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			users={this.props.users}
			isFetchingFollowing={this.props.isFetchingFollowing}
			onChangingPage={this.onChangingPage}
			unfollow={this.props.unfollow}
			follow={this.props.follow}
			toggleIsFetchingFollowing={this.props.toggleIsFetchingFollowing}
		/>)
	}
	componentDidMount() {
		this.props.toggleIsFetching(true);
		usersContainerAPI(this.props.pageSize, this.props.currentPage).then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount);
		})
	}

	onChangingPage = (page) => {
		this.props.toggleIsFetching(true);
		usersContainerAPI(this.props.pageSize, page).then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
			this.props.setCurrentPage(page);
		})
	}
}

const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFetchingFollowing})(UsersAPIContainer)

export default UsersContainer;