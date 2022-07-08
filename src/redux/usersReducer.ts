import {actionType, usersInfo,} from "./state";

enum USER_TYPES {
    TOGGLE_FOLLOW = 'TOGGLE_FOLLOW',
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE',
    SET_IS_FETCHING = 'SET_IS_FETCHING',
}


export type userItemType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: { small: string | null, large: string | null }
    status: string| null
    isFollowing: boolean
}

export const initialState: usersInfo = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}


export type toggleFollowType = ReturnType<typeof toggleFollow>
export type followType = ReturnType<typeof follow>
export type unfollowType = ReturnType<typeof unfollow>
export type setUsersType = ReturnType<typeof setUsers>
export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export type changeCurrentPageType = ReturnType<typeof changeCurrentPage>
export type setIsFetchingType = ReturnType<typeof setIsFetching>


export const usersReducer = (state = initialState, action: actionType) => {
    let copyState = {...state, users: [...state.users]}
    switch (action.type) {
        case USER_TYPES.TOGGLE_FOLLOW: {
            return {...state,
                users: state.users.map(u => u.id === action.userId ?
                    {...u, isFollowing: action.isFollowing} : u)
            }
        }
        case USER_TYPES.SET_USERS: {
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

export const follow = (userId: number) => {
    return {
        type: USER_TYPES.FOLLOW as const,
        userId,
    }
}

export const unfollow = (userId: number) => {
    return {
        type: USER_TYPES.UNFOLLOW as const,
        userId,
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