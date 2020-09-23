import {usersInstance} from './axiosInstances'

export const usersContainerAPI = (pageSize, currentPage) => {
	return usersInstance.get(`/users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
}

export const usersFollowAPI = (userId) => {
	return usersInstance.post(`/follow/${userId}`).then(response => response.data.resultCode)
}

export const usersUnfollowAPI = (userId) => {
	return usersInstance.delete(`/follow/${userId}`).then(response => response.data.resultCode)
}