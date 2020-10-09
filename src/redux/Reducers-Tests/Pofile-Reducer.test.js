import profileReducer, {addPost} from '../Profile-Reducer';

let state = {
	posts: [
		{id: 1, postMessage: 'Hi I`m learning react', likesCount: 5},
		{id: 2, postMessage: 'Is it difficult?', likesCount: 1},
	]
}

it('after post adding length should be increased', () => {
	//1 - initial
	let newPostText = 'newText';
	let action = addPost(newPostText);
	//2 - action
	let	newState = profileReducer(state, action);
	//3 - expectation
	expect(newState.posts.length).toBe(3);
});

it('new post likes count = 0', () => {
	//1 - initial
	let newPostText = 'newText';
	let action = addPost(newPostText);
	//2 - action
	let	newState = profileReducer(state, action);
	//3 - expectation
	expect(newState.posts[newState.posts.length - 1].likesCount).toBe(0);
})