import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
            </div>
            <div>
                <textarea cols="50" rows="5"></textarea>
                <button>Add</button>
                <button>Delete</button>
            </div>
            <Post message={'Hi I`m learning react'} likeCount={5}/>
            <Post message={'Is it difficult?'} likeCount={1}/>
        </div>
    );
}

export default MyPosts;