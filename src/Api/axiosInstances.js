import * as axios from 'axios';

export const usersInstance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0',
	headers: {
		"API-KEY": '8112da00-08e7-460f-9ca1-c38f0f38120c'
	}
});

export const profileInstance = axios.create({
	baseURL: `https://social-network.samuraijs.com/api/1.0/profile`
});