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
	},
	savePhoto(photo){
		let formData = new FormData();
		formData.append("image", photo);
		return profileInstance.put(`/photo`, formData, {
			'Content-Type': 'multipart/form-data'
		}).then(response => response.data);
	},
	setProfile(profile) {
		return profileInstance.put('', profile).then(response => response.data);
	}
};