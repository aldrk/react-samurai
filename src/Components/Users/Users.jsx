import React from "react";
import s from './Users.module.css';

const Users = (props) => {
	return <div className={s.users}>
			{
				props.users.map(user => <div className={s.user} key={user.id}>
							<div className={s.avatarAndButtons}>
								<img src={user.imgUrl} alt="avatar"/>
								{
									user.followed
										? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
										: <button onClick={() => {props.follow(user.id)}}>Follow</button>
								}
							</div>
							<div className={s.mainInfoWrapper}>
								<div className={s.mainInfo}>
									<div>{user.fullName}</div>
									<div>{user.location.city},{user.location.country}</div>
								</div>
								<div className={s.status}>
									{user.status}
								</div>
							</div>
						</div>
				)
			}
		</div>
}

export default Users;