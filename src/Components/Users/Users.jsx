import React from "react";
import styles from './Users.module.css';
import * as axios from 'axios';
import defaultAvatar from '../../assets/default-avatar.png'

class Users extends React.Component{
	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount/ this.props.pageSize)/100;
		let pages = [];
		for (let i = 1; i <= pagesCount; i++){
			pages.push(i);
		}

		return <div className={styles.users}>
			<div className={styles.pagination}>
				{
					pages.map(p => {
						return <span key={p} className={`${styles.page} ${(p === this.props.currentPage) && styles.active}`} onClick={() => {this.onChangingPage(p)}}>{p}</span>
					})
				}
			</div>
			{
				this.props.users.map(user => <div className={styles.user} key={user.id}>
						<div className={styles.avatarAndButtons}>
							<img src={(user.photos.small) === null ? defaultAvatar : user.photos.small}
								 alt="avatar"/>
							{
								user.followed
									? <button onClick={() => {
										this.props.unfollow(user.id)
									}}>Unfollow</button>
									: <button onClick={() => {
										this.props.follow(user.id)
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
	}

	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}page=1`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			})
	};

	onChangingPage(pageNumber){
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setCurrentPage(pageNumber)
			})
	}
}


export default Users;