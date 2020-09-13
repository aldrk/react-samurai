import React from "react";
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/Profile-Reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().profilePage;

                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    const changeNewPostText = (newPostText) => {
                        store.dispatch(changeNewPostTextActionCreator(newPostText));
                    }

                    return (
                        <MyPosts addPost={ addPost } changeNewPostText={ changeNewPostText } posts={ state.posts } newPostText={ state.newPostText }/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;