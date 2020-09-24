let initialState = {
	friends: [
		{id: 1, name: 'Sasha'},
		{id: 2, name: 'Ira'},
		{id: 3, name: 'Kirill'}
	]
};

const sidebarReducer = (state = initialState, action) => {
	return state;
}


export default sidebarReducer;