const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
	users: [
		{id: 1, imgUrl: 'https://sun9-45.userapi.com/c855124/v855124021/115a15/cjAXnKlUJpM.jpg', followed: true, fullName: 'Kirill', status: 'YA DURAK', location: {city: 'Zelenograd', country: 'Russia'}},
		{id: 2, imgUrl: 'https://sun9-45.userapi.com/c855124/v855124021/115a15/cjAXnKlUJpM.jpg', followed: false, fullName: 'Zhenya', status: 'Oh sheet', location: {city: 'Lvov', country: 'Ukraine'}},
		{id: 3, imgUrl: 'https://sun9-45.userapi.com/c855124/v855124021/115a15/cjAXnKlUJpM.jpg', followed: true, fullName: 'Sasha', status: 'Learning react', location: {city: 'Voronezh', country: 'Russia'}}
	]
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
				users: [...state.users, ...action.users]
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

export const setUsers = (users) => {
	return {
		type: SET_USERS,
		users
	}
}

export default usersReducer;