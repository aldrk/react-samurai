import {usersInstance} from './axiosInstances';

export const usersAPI = {
	getUsers (pageSize, currentPage) {
		return usersInstance.get(`/users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
	},
	followUser (userId){
		return usersInstance.post(`/follow/${userId}`).then(response => response.data.resultCode)
	},
	unfollowUser (userId) {
		return usersInstance.delete(`/follow/${userId}`).then(response => response.data.resultCode)
	}
};
