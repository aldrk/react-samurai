import styles from '../ProfileInfo.module.css';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import React from 'react';
import Contacts from './Contacts/Contacts';

const ProfileServerInfo = ({profile, status, updateStatus, setEditMode}) => {
	const editHandler = () => {
		setEditMode(true);
	};

	return (
		<div className={styles.avatarAndDescription}>
			<div className={styles.info}>
				<button onClick={editHandler}>Edit</button>
				<div className={styles.name}>
					{profile.fullName}
				</div>
				<div className={styles.name}>
					Обо мне: {profile.aboutMe}
				</div>
				<div className={styles.job}>
					<div>В поисках работы: {profile.lookingForAJob ? 'Да' : 'Нет'}</div>
				</div>
				<div className={styles.job}>
					<div>Skills: {profile.lookingForAJobDescription}</div>
				</div>
				<div className={styles.job}>
					<div>Contacts:</div>
					<Contacts contacts={profile.contacts}/>
				</div>
				<div className={styles.status}>
					<ProfileStatus status={ status } updateStatus={ updateStatus }/>
				</div>
			</div>
		</div>
	)
};

export default ProfileServerInfo;
