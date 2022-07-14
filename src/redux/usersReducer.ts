import {actionType, usersInfo,} from "./state";
import {Dispatch} from "@reduxjs/toolkit";
import {usersAPI} from "../api/api";

enum USER_TYPES {
    TOGGLE_FOLLOW = 'TOGGLE_FOLLOW',
    SET_USERS = 'SET_USERS',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE',
    SET_IS_FETCHING = 'SET_IS_FETCHING',
    SET_FOLLOWING_IN_PROGRESS = 'SET_FOLLOWING_IN_PROGRESS',
}


export type userItemType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: { small: string | null, large: string | null }
    status: string| null
    followed: boolean
}

export const initialState: usersInfo = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}


export type toggleFollowType = ReturnType<typeof toggleFollow>
export type setUsersType = ReturnType<typeof setUsers>
export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export type changeCurrentPageType = ReturnType<typeof changeCurrentPage>
export type setIsFetchingType = ReturnType<typeof setIsFetching>
export type setFollowingInProgressType = ReturnType<typeof setFollowingInProgress>


export const usersReducer = (state = initialState, action: actionType) => {
    let copyState = {...state, users: [...state.users]}
    switch (action.type) {
        case USER_TYPES.TOGGLE_FOLLOW: {
            return {...state,
                users: state.users.map(u => u.id === action.userId ?
                    {...u, followed: action.isFollowing} : u)
            }
        }
        case USER_TYPES.SET_USERS: {
            debugger
            return {...state, users: [...action.users]}
        }
        case USER_TYPES.SET_TOTAL_USERS_COUNT: {
            let newState = {...state}
            return {...newState, totalUsersCount: action.totalUsersCount}
        }
        case USER_TYPES.CHANGE_CURRENT_PAGE: {
            return {...state, currentPage: action.pageNumber}
        }
        case USER_TYPES.SET_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case USER_TYPES.SET_FOLLOWING_IN_PROGRESS: {
            if (action.isAdding) {
                return {...state, followingInProgress: [...state.followingInProgress, action.userId]}
            } else {
                return {...state, followingInProgress: state.followingInProgress.filter(u => u !== action.userId)}
            }
        }
        default:
            return copyState
    }
}


export const toggleFollow = (userId: number, isFollowing: boolean) => {
    return {
        type: USER_TYPES.TOGGLE_FOLLOW as const,
        userId,
        isFollowing,
    }
}

export const setUsers = (users: Array<userItemType>) => {
    return {
        type: USER_TYPES.SET_USERS as const,
        users,
    }
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: USER_TYPES.SET_TOTAL_USERS_COUNT as const,
        totalUsersCount,
    }
}

export const changeCurrentPage = (pageNumber: number) => {
    return {
        type: USER_TYPES.CHANGE_CURRENT_PAGE as const,
        pageNumber,
    }
}

export const setIsFetching = (isFetching: boolean) => {
    return {
        type: USER_TYPES.SET_IS_FETCHING as const,
        isFetching,
    }
}

export const setFollowingInProgress = (userId: number, isAdding: boolean) => {
    return {
        type: USER_TYPES.SET_FOLLOWING_IN_PROGRESS as const,
        userId,
        isAdding,
    }
}


export const getUsers = (pageNumber: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(initialState.currentPage, initialState.pageSize)
            .then(response => {
                    dispatch(setUsers(response.items))
                    dispatch(setTotalUsersCount(response.totalCount))
                    dispatch(setIsFetching(false))
                }
            )
    }
}


export const followUser = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFollowingInProgress(userId, true))
        usersAPI.followUser(userId)
            .then((response) => {
                dispatch(setFollowingInProgress(userId, false))
                dispatch(toggleFollow(userId, true))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const unfollowUser = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFollowingInProgress(userId, true))
        usersAPI.unfollowUser(userId)
            .then((response) => {
                dispatch(setFollowingInProgress(userId, false))
                dispatch(toggleFollow(userId, false))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}