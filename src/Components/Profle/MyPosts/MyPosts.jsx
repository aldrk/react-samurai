import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {
	isRequired,
	maxLengthValidationCreator,
	minLengthValidationCreator
} from "../../../utils/validation";
import {Textarea} from "../../../assets/ValidationComponents/FormControl";

const maxSymbols = maxLengthValidationCreator(140);
const minSymbols = minLengthValidationCreator(2);

const NewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field validate={[isRequired, maxSymbols, minSymbols]} name='newPostText' component={Textarea} placeholder='Что нвого?' type='text'/>
			<div className={s.newPostButtons}>
				<button>Add</button>
			</div>
		</form>
	);
};

const NewPostReduxForm = reduxForm({
	form: 'newPost'
})(NewPostForm);

const MyPosts = React.memo((props) => {
	let postsComponents = props.posts.map(p => <Post postMessage={p.postMessage}
													 likesCount={p.likesCount}
												  	 key={p.id}/>);
	const addPost = (data) => {
		props.addPost(data.newPostText);
	};

	return (
		<div className={s.posts}>
			<div className={s.postsHeader}>
				My posts
			</div>
			<div className={s.newPost}>
                <NewPostReduxForm onSubmit={addPost}/>
			</div>
			{postsComponents}
		</div>
	);
});

export default MyPosts;