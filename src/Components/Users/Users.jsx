import React from "react";
import styles from './Users.module.css';
import * as axios from 'axios';
import defaultAvatar from '../../assets/default-avatar.png'

class Users extends React.Component{
	constructor(props) {
		super(props);
		axios
			.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => {
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		return <div className={styles.users}>
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
}


export default Users;