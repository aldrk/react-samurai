const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

const initialState = {
	users: [],
	pageSize: 4,
	currentPage: 1,
	totalUsersCount: 0,
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
		default:
			return state;
	}
}

export const followAC = (userId) => {
	return {
		type: FOLLOW,
		userId
	}
}

export const unfollowAC = (userId) => {
	return {
		type: UNFOLLOW,
		userId
	}
}

export const setUsersAC = (users) => {
	return {
		type: SET_USERS,
		users
	}
}

export const setCurrentPageAC = (page) => {
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

export default usersReducer;