const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initialState = {
	users: [],
	pageSize: 4,
	currentPage: 1,
	totalUsersCount: 0,
	isFetching: false
}

const usersReducer = (state = initialState, action) => {
	switch (action.type){
		case FOLLOW:
			return {
					...state,
					users: state.users.map(user => {
						if (user.id === action.userId) return {...user, followed: true};
						return user;
					})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) return {...user, followed: false};
					return user;
				})
			}
		case SET_USERS:
			return {
				...state,
				users: [...action.users]
			}
		case SET_CURRENT_PAGE:
			return  {
				...state,
				currentPage: action.page
			}
		case SET_TOTAL_USERS_COUNT:
			return  {
				...state,
				totalUsersCount: action.count
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}
		default:
			return state;
	}
}

export const follow = (userId) => {
	return {
		type: FOLLOW,
		userId
	}
}
export const unfollow = (userId) => {
	return {
		type: UNFOLLOW,
		userId
	}
}
export const setUsers = (users) => {
	return {
		type: SET_USERS,
		users
	}
}
export const setCurrentPage = (page) => {
	return {
		type: SET_CURRENT_PAGE,
		page
	}
}
export const setTotalUsersCount = (count) => {
	return {
		type: SET_TOTAL_USERS_COUNT,
		count
	}
}
export const toggleIsFetching = (isFetching) => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching
	}
}

export default usersReducer;