import {addPost, changeNewPostText} from '../../../redux/Profile-Reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};


const MyPostsContainer = connect(mapStateToProps, {addPost, changeNewPostText})(MyPosts);

export default MyPostsContainer;