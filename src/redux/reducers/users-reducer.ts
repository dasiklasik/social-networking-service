import {actionType, usersInfo,} from "../state";
import {Dispatch} from "@reduxjs/toolkit";
import {usersAPI} from "../../api/api";

enum USER_TYPES {
    TOGGLE_FOLLOW = 'social_network/users/TOGGLE_FOLLOW',
    SET_USERS = 'social_network/users/SET_USERS',
    SET_TOTAL_USERS_COUNT = 'social_network/users/SET_TOTAL_USERS_COUNT',
    CHANGE_CURRENT_PAGE = 'social_network/users/CHANGE_CURRENT_PAGE',
    SET_IS_FETCHING = 'social_network/users/SET_IS_FETCHING',
    SET_FOLLOWING_IN_PROGRESS = 'social_network/users/SET_FOLLOWING_IN_PROGRESS',
}

export const initialState: usersInfo = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}


export const usersReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case USER_TYPES.TOGGLE_FOLLOW:
            return {
                ...state, users: state.users.map(u => u.id === action.userId ?
                    {...u, followed: action.isFollowing} : u)
            }
        case USER_TYPES.SET_USERS:
            return {...state, users: [...action.users]}

        case USER_TYPES.SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case USER_TYPES.CHANGE_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber}
        case USER_TYPES.SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case USER_TYPES.SET_FOLLOWING_IN_PROGRESS:
            if (action.isAdding) {
                return {...state, followingInProgress: [...state.followingInProgress, action.userId]}
            } else {
                return {...state, followingInProgress: state.followingInProgress.filter(u => u !== action.userId)}
            }
        default:
            return state
    }
}

//actions
export const toggleFollow = (userId: number, isFollowing: boolean) =>
    ({type: USER_TYPES.TOGGLE_FOLLOW as const, userId, isFollowing} as const)
export const setUsers = (users: Array<userItemType>) =>
    ({type: USER_TYPES.SET_USERS, users} as const)
export const setTotalUsersCount = (totalUsersCount: number) =>
    ({type: USER_TYPES.SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const changeCurrentPage = (pageNumber: number) =>
    ({type: USER_TYPES.CHANGE_CURRENT_PAGE, pageNumber} as const)
export const setIsFetching = (isFetching: boolean) =>
    ({type: USER_TYPES.SET_IS_FETCHING, isFetching} as const)
export const setFollowingInProgress = (userId: number, isAdding: boolean) =>
    ({type: USER_TYPES.SET_FOLLOWING_IN_PROGRESS, userId, isAdding} as const)


//thunks
export const fetchUsers = (pageNumber: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    const response = await usersAPI.getUsers(pageNumber, pageSize)
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
    dispatch(setIsFetching(false))
}

export const followUser = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(setFollowingInProgress(userId, true))
    const response = await usersAPI.followUser(userId)
    dispatch(setFollowingInProgress(userId, false))
    dispatch(toggleFollow(userId, true))
}

export const unfollowUser = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(setFollowingInProgress(userId, true))
    const response = await usersAPI.unfollowUser(userId)
    dispatch(setFollowingInProgress(userId, false))
    dispatch(toggleFollow(userId, false))
}


//types
export type toggleFollowType = ReturnType<typeof toggleFollow>
export type setUsersType = ReturnType<typeof setUsers>
export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export type changeCurrentPageType = ReturnType<typeof changeCurrentPage>
export type setIsFetchingType = ReturnType<typeof setIsFetching>
export type setFollowingInProgressType = ReturnType<typeof setFollowingInProgress>

export type userItemType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: { small: string | null, large: string | null }
    status: string | null
    followed: boolean
}