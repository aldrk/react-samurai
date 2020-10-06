import React from 'react';
import styles from './FormComtrol.module.css';

const FormControl = ({meta, children}) => {
	let isError = meta.error && meta.touched;
	return (
		<div>
			<div className={isError ? styles.error : ''}>
				{children}
			</div>
			{
				isError &&
				<div className={isError && styles.error}>
					<span>{meta.error}</span>
				</div>
			}

		</div>
	)
};

export const Textarea = ({input, placeholder, ...props}) => {
	return <FormControl {...props}><textarea placeholder={placeholder} {...input}/></FormControl>
}

export const Input = ({input,type, placeholder, ...props}) => {
	return <FormControl {...props}><input {...input} type={type} placeholder={placeholder}/></FormControl>
}