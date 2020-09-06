import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" alt="avatar"/>
            <div className={s.postMessage}>
                {props.postMessage}
            </div>
            <div className={s.postLikes}>
                <span>Like</span> {props.likeCount}
            </div>
        </div>
    );
}

export default Post;