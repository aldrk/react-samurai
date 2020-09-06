import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = () => {
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
            <Post postMessage={'Hi I`m learning react'} likeCount={5}/>
            <Post postMessage={'Is it difficult?'} likeCount={1}/>
        </div>
    );
}

export default MyPosts;