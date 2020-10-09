import {usersAPI} from "../Api/usersAPI";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FETCHING_FOLLOWING = 'TOGGLE-FETCHING-FOLLOWING';


const initialState = {
	users: [],
	pageSize: 4,
	currentPage: 1,
	totalUsersCount: 0,
	isFetching: false,
	isFetchingFollowing: []
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) return {...user, followed: true};
					return user;
				})
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) return {...user, followed: false};
					return user;
				})
			};
		case SET_USERS:
			return {
				...state,
				users: [...action.users]
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.page
			};
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.count
			};
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			};
		case TOGGLE_FETCHING_FOLLOWING: {
			const deleteUserFollowing = (userId) => {
				return {
					...state,
					isFetchingFollowing: state.isFetchingFollowing.filter(u => u !== userId)
				}
			};
			const addUserFollowing = (userId) => {
				return {
					...state,
					isFetchingFollowing: [...state.isFetchingFollowing, userId]
				}
			};
			return action.status ? addUserFollowing(action.userId) : deleteUserFollowing(action.userId);
		}
		default:
			return state;
	}
}

export const follow = (userId) => {
	return {
		type: FOLLOW,
		userId
	};
};

export const unfollow = (userId) => {
	return {
		type: UNFOLLOW,
		userId
	};
};

export const setUsers = (users) => {
	return {
		type: SET_USERS,
		users
	};
};

export const setCurrentPage = (page) => {
	return {
		type: SET_CURRENT_PAGE,
		page
	};
};

export const setTotalUsersCount = (count) => {
	return {
		type: SET_TOTAL_USERS_COUNT,
		count
	};
};

export const toggleIsFetching = (isFetching) => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching
	};
};

export const toggleIsFetchingFollowing = (userId, status) => {
	return {
		type: TOGGLE_FETCHING_FOLLOWING,
		status,
		userId
	};
};

export const requestUsers = (pageSize, currentPage, flag) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	usersAPI.getUsers(pageSize, currentPage)
		.then(users => {
			if (flag === 'get'){
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(users.items));
				dispatch(setTotalUsersCount(users.totalCount));
			} else if (flag === 'change'){
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(users.items));
				dispatch(setCurrentPage(currentPage));
			}
		});
};

export const followThunk = (userId) => (dispatch) => {
	dispatch(toggleIsFetchingFollowing(userId, true));
	usersAPI.followUser(userId).then(resultCode => {
		dispatch(toggleIsFetchingFollowing(userId ,false));
		if (resultCode === 0) {
			dispatch(follow(userId));
		}
	});
};

export const unfollowThunk = (userId) => (dispatch) => {
	dispatch(toggleIsFetchingFollowing(userId, true));
	usersAPI.unfollowUser(userId).then(resultCode => {
		dispatch(toggleIsFetchingFollowing(userId ,false));
		if (resultCode === 0) {
			dispatch(unfollow(userId));
		}
	});
};

export default usersReducer;