import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/Profile-Reducer";


const MyPosts = (props) => {
    let postsComponents = props.posts.map(p => <Post postMessage={ p.postMessage } likesCount={ p.likesCount }/>);
    let postText = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const changeNewPostText = () => {
        let newPostText = postText.current.value;
        props.dispatch(changeNewPostTextActionCreator(newPostText));
    }

    return (
        <div className={ s.posts }>
            <div className={ s.postsHeader }>
                My posts
            </div>
            <div className={ s.newPost }>
                <textarea
                    ref={ postText }
                    onChange={ changeNewPostText }
                    value={ props.newPostText }
                />
                <div className={ s.newPostButtons }>
                    <button onClick={ addPost }>Add</button>
                    <button>Delete</button>
                </div>
            </div>
            { postsComponents }
        </div>
    );
}

export default MyPosts;