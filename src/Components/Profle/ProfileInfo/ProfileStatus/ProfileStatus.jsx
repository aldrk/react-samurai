import React, {useEffect, useState} from 'react';
import styles from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
	let [editMode, setEditMode] = useState(false);
	let [currentStatus, setCurrentStatus] = useState(props.status);

	useEffect(() => {
		setCurrentStatus(props.status);
	}, [props.status]);

	const activateEditMode = (value) => {
		setEditMode(true);
	};

	const changeStatusText = (event) => {
		setCurrentStatus(event.target.value);
	};

	const updateStatus = () => {
		setEditMode(false);
		props.updateStatus(currentStatus);
	};

		return (
			<>
				{
					editMode
						? <input autoFocus={ true } value={ currentStatus } onChange={ changeStatusText } onBlur={ updateStatus } type="text"/>
						: <span onDoubleClick={ activateEditMode } className={ styles.statusText }>{ currentStatus }</span>
				}
			</>
		);
}

export default ProfileStatus;