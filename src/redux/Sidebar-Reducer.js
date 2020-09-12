const DRAW_FRIEND = 'DRAW-FRIEND'

let initialState = {
	friends: [
		{id: 1, name: 'Sasha'},
		{id: 2, name: 'Ira'},
		{id: 3, name: 'Kirill'}
	]
}

const sidebarReducer = (state = initialState, action) => {
	switch (action.type) {
		case DRAW_FRIEND:
			return state;
	}
}

export const drawFriendActionCreator = () => {
	return {type: DRAW_FRIEND}
}

export default sidebarReducer;