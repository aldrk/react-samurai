import {connect} from 'react-redux';
import Users from './Users';
import {followThunk, unfollowThunk,
		toggleIsFetchingFollowing, requestUsers} from '../../redux/Users-Reducer';
import React from 'react';
import Preloader from '../Common/Preloader/Preloader.jsx';
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
	getCurrentPage, getIsFetching, getIsFetchingFollowing,
	getPageSize, getSuperUsers,
	getTotalUsersCount
} from "../../redux/Reselects/User-Reselect";


const mapStateToProps = (state) => {
	return {
		users: getSuperUsers(state),
		pageSize: getPageSize(state),
		currentPage: getCurrentPage(state),
		totalUsersCount: getTotalUsersCount(state),
		isFetching: getIsFetching(state),
		isFetchingFollowing: getIsFetchingFollowing(state)
	};
};

class UsersAPIContainer extends React.Component {
	render() {
		return (this.props.isFetching? <Preloader/>: <Users
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			users={this.props.users}
			onChangingPage={this.onChangingPage}
			unfollow={this.props.unfollow}
			isFetchingFollowing={this.props.isFetchingFollowing}
			toggleIsFetchingFollowing={this.props.toggleIsFetchingFollowing}
			followThunk={this.props.followThunk}
			unfollowThunk={this.props.unfollowThunk}
		/>)
	};
	componentDidMount() {
		this.props.getUsers(this.props.pageSize, this.props.currentPage, 'get');
	};

	onChangingPage = (page) => {
		this.props.getUsers(this.props.pageSize, page, 'change');
	};
}

export default compose(
	connect(mapStateToProps, {followThunk, unfollowThunk, toggleIsFetchingFollowing, getUsers: requestUsers}),
	withAuthRedirect
)(UsersAPIContainer);