import React from 'react';
import styles from './Users.module.css';
import defaultAvatar from '../../assets/images/default-avatar.png'
import {NavLink} from 'react-router-dom';
import Paginator from './Paginator/Paginator';

const Users = ({totalUsersCount, pageSize, followThunk, unfollowThunk, currentPage, onChangingPage, users, isFetchingFollowing}) => {
	const follow = (userId) => {
		followThunk(userId);
	};
	const unfollow = (userId) => {
		unfollowThunk(userId);
	};
	return (<div className={styles.users}>
			<Paginator totalUsersCount={totalUsersCount}
					   pageSize={pageSize}
					   currentPage={currentPage}
					   onChangingPage={onChangingPage}
			/>
			{
				users.map(user => <div className={styles.user} key={user.id}>
						<div className={styles.avatarAndButtons}>
							<NavLink to={`/Profile/${user.id}`}>
								<img
									src={(user.photos.small) === null ? defaultAvatar : user.photos.small}
									alt="avatar"/>
							</NavLink>
							{
								user.followed
									?
									<button disabled={!!isFetchingFollowing.find(id => id === user.id)}
											onClick={() => {
												unfollow(user.id)
											}}>Unfollow</button>
									:
									<button disabled={!!isFetchingFollowing.find(id => id === user.id)}
											onClick={() => {
												follow(user.id)
											}}>Follow</button>
							}
						</div>
						<div className={styles.mainInfoWrapper}>
							<div className={styles.mainInfo}>
								<div>{user.name}</div>
								<div>{"user.location.city"},{"user.location.country"}</div>
							</div>
							<div className={styles.status}>
								{user.status}
							</div>
						</div>
					</div>
				)
			}
		</div>
	);
};

export default Users;