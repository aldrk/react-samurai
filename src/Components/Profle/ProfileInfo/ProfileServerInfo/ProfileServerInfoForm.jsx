import React from 'react';
import {Field, reduxForm} from 'redux-form';
import styles from '../ProfileInfo.module.css';
import {Input} from '../../../../assets/ValidationComponents/FormControl';

const ProfileServerInfoForm = ({handleSubmit, initialValues, error}) => {
	return (
		<form onSubmit={handleSubmit}>
			<button>Save</button>

			{error && <div>{error}</div>}
			<div>
				Имя: <Field validate={[]} name='fullName' type='text' placeholder='Full name' component={Input}/>
			</div>
			<div>
				Обо мне: <Field validate={[]} name='aboutMe' type='text' placeholder='aboutMe' component={Input}/>
			</div>
			<div>
				В поисках работы: <Field validate={[]} name='lookingForAJob' type='checkbox' component='input'/>
			</div>
			<div>
				Skills: <Field validate={[]} name='lookingForAJobDescription' type='text' placeholder='Skills' component={Input}/>
			</div>
			<div className={styles.job}>
				Contacts:
				{Object.keys(initialValues.contacts).map(key => <div key={key}>
						{key}:
						<Field name={`contacts.${key}`} type='text' placeholder={initialValues.contacts[key]} component={Input}/>
				</div>
				)}
			</div>
		</form>
	);
};

const ProfileServerInfoReduxForm = reduxForm({
	form: 'edit-profile'
})(ProfileServerInfoForm);

export default ProfileServerInfoReduxForm;