import React from 'react';
import preloader from '../../../assets/images/preloader.svg';
import styles from './Preloader.module.css';

const Preloader = (props) => {
	return (
		<div className={styles.preloader}>
			<img src={preloader} alt="Please, wait for loading..."/>
		</div>
	)
}

export default Preloader;