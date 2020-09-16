import {connect} from 'react-redux';
import Users from "./Users";
import {
	follow, setCurrentPage, setTotalUsersCount,
	setUsers, toggleIsFetching,
	unfollow
} from '../../redux/Users-Reducer';
import React from 'react';
import * as axios from "axios";
import Preloader from "../Common/Preloader/Preloader.jsx";


const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		currentPage: state.usersPage.currentPage,
		totalUsersCount: state.usersPage.totalUsersCount,
		isFetching: state.usersPage.isFetching
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
			onChangingPage={this.onChangingPage}
			unfollow={this.props.unfollow}
			follow={this.props.follow}/>)
	}
	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			})
	}

	onChangingPage = (page) => {
		this.props.toggleIsFetching(true);
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
				this.props.setCurrentPage(page);
			})
	}
}

const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersAPIContainer)

export default UsersContainer;