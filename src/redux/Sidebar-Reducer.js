const DRAW_FRIEND = 'DRAW-FRIEND'

const sidebarReducer = (state, action) => {
	switch (action.type) {
		case DRAW_FRIEND:
			return state;
	}
}

export const drawFriendActionCreator = () => {
	return {type: DRAW_FRIEND}
}

export default sidebarReducer;