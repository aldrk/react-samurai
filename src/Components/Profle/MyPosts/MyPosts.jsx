import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'




const MyPosts = (props) => {
    let postsComponents = props.posts.map(p => <Post postMessage={p.postMessage} likesCount={p.likeCount}/>)
    return (
        <div className={s.posts}>
            <div className={s.postsHeader}>
                My posts
            </div>
            <div className={s.newPost}>
                <textarea cols="50" rows="5"></textarea>
                <div className={s.newPostButtons}>
                    <button>Add</button>
                    <button>Delete</button>
                </div>
            </div>
            {postsComponents}
        </div>
    );
}

export default MyPosts;