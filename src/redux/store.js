import profileReducer from "./Profile-Reducer";
import dialogReducer from "./Dialog-Reducer";
import sidebarReducer from "./Sidebar-Reducer";

let store = {
	_state: {
		ProfilePage: {
			posts: [
				{id: 1, postMessage: 'Hi I`m learning react', likesCount: 5},
				{id: 2, postMessage: 'Is it difficult?', likesCount: 1},
			],
			newPostText: ''
		},
		DialogsPage: {
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
		},
		Sidebar: {
			friends: [
				{id: 1, name: 'Sasha'},
				{id: 2, name: 'Ira'},
				{id: 3, name: 'Kirill'}
			]
		}
	},

	_callSubscriber() {
	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
		this._state.DialogsPage = dialogReducer(this._state.DialogsPage, action);
		this._callSubscriber(this._state);
	}
};

export default store;