import {profileInstance} from './axiosInstances';

export const profileAPI = {
	getProfile(userId) {
		return profileInstance.get(`/${userId}`).then(response => response.data);
	},
	getStatus(userId) {
		return profileInstance.get(`/status/${userId}`).then(response => response.data);
	},
	updateStatus(status) {
		return profileInstance.put(`/status`, {status}).then(response => response.data)
	}
};