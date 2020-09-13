import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = (props) => {
	let postsComponents = props.posts.map(p => <Post postMessage={p.postMessage}
													 likesCount={p.likesCount}/>);
	const addPost = () => {
		props.addPost();
	}

	const changeNewPostText = (event) => {
		let newPostText = event.target.value;
		props.changeNewPostText(newPostText);
	}

	return (
		<div className={s.posts}>
			<div className={s.postsHeader}>
				My posts
			</div>
			<div className={s.newPost}>
                <textarea
					onChange={changeNewPostText}
					value={props.newPostText}
				/>
				<div className={s.newPostButtons}>
					<button onClick={addPost}>Add</button>
					<button>Delete</button>
				</div>
			</div>
			{postsComponents}
		</div>
	);
}

export default MyPosts;