let store = {
    _state: {
        ProfilePage: {
            posts: [
                {id: 1, postMessage: 'Hi I`m learning react', likeCount: 5},
                {id: 2, postMessage: 'Is it difficult?', likeCount: 1},
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
            ]
        },
        Sidebar: {
            friends: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Ira'},
                {id: 3, name: 'Kirill'}
            ]
        }
    },

    rerenderEntireTree(){},

    addPost(){
        let newPost = {
            id: this._state.ProfilePage.posts.length + 1,
            postMessage: this._state.ProfilePage.newPostText,
            likeCount: 0
        };
        this._state.ProfilePage.posts.push(newPost);
        this._state.ProfilePage.newPostText = '';
        this.rerenderEntireTree(this._state);
    },

    changeNewPostText(text){
        this._state.ProfilePage.newPostText = text;
        this.rerenderEntireTree(this._state);
    },

    subscribe(observer){
        this.rerenderEntireTree = observer;
    },

    getState(){
        return this._state;
    }
};

export default store;