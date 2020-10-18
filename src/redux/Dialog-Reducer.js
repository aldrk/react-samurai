const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

let initialState = {
	dialogs: [
		{id: 1, name: 'Dima'},
		{id: 2, name: 'Mary'},
		{id: 3, name: 'Anya'},
		{id: 4, name: 'Liza'},
		{id: 5, name: 'Igor'}
	],
	messages: [
		{id: 1, message: 'How do you do?'},
		{id: 2, message: 'Fine, and you?'},
		{id: 3, message: 'Me too'}
	]
};

const dialogReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			let newMessage = {
				id: state.messages[state.messages.length] + 1,
				message: action.message
			};
			return {
				...state,
				messages: [...state.messages, newMessage]
			}
		}
		default:
			return state;
	}
};

export const addMessage = (message) => {
	return {
		type: ADD_MESSAGE,
		message
	};
};


export default dialogReducer;