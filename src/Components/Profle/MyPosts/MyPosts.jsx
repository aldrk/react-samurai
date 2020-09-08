import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'

let posts = [
    {id: 1, postMessage: 'Hi I`m learning react', likeCount: 5},
    {id: 2, postMessage: 'Is it difficult?', likeCount: 1},
]

let postsComponents = posts.map(p => <Post postMessage={p.postMessage} likesCount={p.likeCount}/>)

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
            {postsComponents}
        </div>
    );
}

export default MyPosts;