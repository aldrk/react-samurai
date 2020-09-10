import rerenderEntireTree from "../render";

let state = {
    ProfilePage: {
        posts: [
            {id: 1, postMessage: 'Hi I`m learning react', likeCount: 5},
            {id: 2, postMessage: 'Is it difficult?', likeCount: 1},
        ]
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
            ]
    },
    Sidebar: {
        friends: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Ira'},
            {id: 3, name: 'Kirill'}
        ]
    }
}

export const addPost = (postMessage) => {
    let newPost = {
        id: state.ProfilePage.posts.length + 1,
        postMessage: postMessage,
        likeCount: 0
    };
    state.ProfilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;