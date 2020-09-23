import {profileInstance} from './axiosInstances'

export const profileAPI = (userId) => {
	return profileInstance.get(`/${userId}`).then(response => response.data)
}