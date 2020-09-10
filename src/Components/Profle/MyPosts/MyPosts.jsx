import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'




const MyPosts = (props) => {
    let postsComponents = props.posts.map(p => <Post postMessage={p.postMessage} likesCount={p.likeCount}/>);
    let postText = React.createRef();
    const addPost = () => {
        let text = postText.current.value;
        props.addPost(text);
    }

    return (
        <div className={s.posts}>
            <div className={s.postsHeader}>
                My posts
            </div>
            <div className={s.newPost}>
                <textarea ref={postText} cols="50" rows="5"></textarea>
                <div className={s.newPostButtons}>
                    <button  onClick={ addPost }>Add</button>
                    <button>Delete</button>
                </div>
            </div>
            {postsComponents}
        </div>
    );
}

export default MyPosts;