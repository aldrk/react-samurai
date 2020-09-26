import {authInstance} from './axiosInstances';

export const authAPI = () => {
	return authInstance.get().then(response => response.data);
};