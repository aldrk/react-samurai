import React from 'react';
import styles from './Contacts.module.css';

const Contacts = ({contacts}) => {
	return (
		<div className={styles.root}>
			{Object.keys(contacts).map(key => <div key={key}>{key}: {contacts[key]}</div>)}
		</div>
	);
};

export default Contacts;