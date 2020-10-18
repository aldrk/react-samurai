import React, {useState} from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileServerInfo from "./ProfileServerInfo/ProfileServerInfo";
import ProfileBackground from "./ProfileBackground/ProfileBackground";
import ProfileServerInfoForm from "./ProfileServerInfo/ProfileServerInfoForm";
import defaultAvatar from "../../../assets/images/default-avatar.png";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, setProfile}) => {
	const [editMode, setEditMode] = useState(false);
	if (!profile) {
		return <Preloader/>;
	}

	const saveFileHandler = (event) => {
		if (event.target.files.length) {
			savePhoto(event.target.files[0]);
		}
	};

	const onSubmit = ({aboutMe, contacts, fullName, lookingForAJob, lookingForAJobDescription}) => {
		let newObject = {aboutMe, contacts, fullName, lookingForAJob, lookingForAJobDescription};
		setProfile(newObject).then(() => {
			setEditMode(false);
		})
	}

	return (
		<div>
			<ProfileBackground/>

			{isOwner && <input type='file' onChange={saveFileHandler}/>}
			{
				<img className={styles.avatar} src={  profile.photos.large !== null
					?profile.photos.large
					:defaultAvatar} alt=''/>
			}
            {!editMode
                ? <ProfileServerInfo profile={profile} status={status} updateStatus={updateStatus} setEditMode={setEditMode}/>
                : <ProfileServerInfoForm initialValues={profile} onSubmit={onSubmit}/>
            }
		</div>
	);
};

export default ProfileInfo;