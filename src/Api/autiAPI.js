import {authInstance} from './axiosInstances';

export const authAPI = () => ({
	me: () => {
		return authInstance.get('/me').then(response => response.data);
	},
	login: (email, password, rememberMe) => {
		return authInstance.post('/login', {email, password, rememberMe}).then(response => response.data);
	},
	logout: () => {
		return authInstance.delete('/login').then(response => response.data);
	}
});