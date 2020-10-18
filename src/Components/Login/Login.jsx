import React from 'react';
import {Field, reduxForm} from "redux-form";
import styles from './Login.module.css';
import {Input} from "../../assets/ValidationComponents/FormControl";
import {isRequired, minLengthValidationCreator} from "../../utils/validation";
import {Redirect} from "react-router-dom";

const minLength4 = minLengthValidationCreator(4);

const LoginForm = ({handleSubmit, error}) => {
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<Field validate={[isRequired, minLength4]} placeholder='login' name='login' type='text' component={Input}/>
			<Field validate={[isRequired, minLength4]} placeholder='password' name='pass' type='password' component={Input}/>
			<div>
				<Field name='isRemember' type='checkbox' component={'input'}/>
				<label htmlFor="isRemember">Remember me</label>
			</div>
			{
				error
				&& <div className={styles.error}>
					{error}
				</div>
			}
			<button>Login</button>
		</form>
	);
};

const LoginContainer = reduxForm({
	form: 'login'
})(LoginForm);

const Login = ({login, isAuth}) => {
	const loginHandler = ({login, pass, isRemember}) => {
		login(login, pass, isRemember);
	};

	if (isAuth) return <Redirect to='/Profile'/>

	return (
		<div>
			<h1>Login</h1>
			<LoginContainer onSubmit={loginHandler}/>
		</div>
	);
};



export default Login;