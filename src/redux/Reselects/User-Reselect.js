import {createSelector} from "reselect";

const getUsers = (state) => {
	return state.usersPage.users
};

export const getPageSize = (state) => {
	return state.usersPage.pageSize
};

export const getTotalUsersCount = (state) => {
	return state.usersPage.totalUsersCount
};

export const getIsFetching = (state) => {
	return state.usersPage.isFetching
};

export const getCurrentPage = (state) => {
	return state.usersPage.currentPage
};

export const getIsFetchingFollowing = (state) => {
	return state.usersPage.isFetchingFollowing
};

export const getSuperUsers = createSelector(getUsers, (users) => {
	return users;
})

