import React from "react";
import styles from './Users.module.css';
import defaultAvatar from '../../assets/images/default-avatar.png'
import {NavLink} from "react-router-dom";

const Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) / 100;
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return (<div className={styles.users}>
			<div className={styles.pagination}>
				{
					pages.map(p => {
						return <span key={p}
									 className={`${styles.page} ${(p === props.currentPage) && styles.active}`}
									 onClick={() => {
										 props.onChangingPage(p)
									 }}>{p}</span>
					})
				}
			</div>
			{
				props.users.map(user => <div className={styles.user} key={user.id}>
						<div className={styles.avatarAndButtons}>
							<NavLink to="/Profile/1">
								<img src={(user.photos.small) === null ? defaultAvatar : user.photos.small} alt="avatar"/>
							</NavLink>
							{
								user.followed
									? <button onClick={() => {
										props.unfollow(user.id)
									}}>Unfollow</button>
									: <button onClick={() => {
										props.follow(user.id)
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
	)
}

export default Users;