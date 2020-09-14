const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT';

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
	],
	newMessageText: ''
}

const dialogReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			let newMessage = {
				id: state.messages[state.messages.length] + 1,
				message: state.newMessageText
			}
			return {
				...state,
				messages: [...state.messages, newMessage],
				newMessageText: ''
			}
		}
		case CHANGE_NEW_MESSAGE_TEXT:{
			return {
				...state,
				newMessageText: action.newMessageText
			};
		}
		default:
			return state;
	}
};

export const addMessageActionCreator = () => {
	return {type: ADD_MESSAGE};
};

export const changeNewMessageTextActionCreator = (newMessageText) => {
	return {
		type: CHANGE_NEW_MESSAGE_TEXT,
		newMessageText: newMessageText
	};
};

export default dialogReducer;