import {actionType, usersInfo,} from "./state";


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
}


export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export type changeCurrentPageACType = ReturnType<typeof changeCurrentPageAC>
export type setIsFetchingACType = ReturnType<typeof setIsFetchingAC>


export const usersReducer = (state = initialState, action: actionType) => {
    let copyState = {...state, users: [...state.users]}
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...copyState, users: copyState.users
                    .map(t => t.id === action.userId ? {...t, followed: true} : t)
            }
        }
        case 'UNFOLLOW': {
            return {
                ...copyState, users: copyState.users
                    .map(t => t.id === action.userId ? {...t, followed: false} : t)
            }
        }
        case 'SET-USERS': {
            return {...state, users: [...action.users]}
        }
        case 'SET-TOTAL-USERS-COUNT': {
            let newState = {...state}
            return {...newState, totalUsersCount: action.totalUsersCount}
        }
        case 'CHANGE-CURRENT-PAGE': {
            return {...state, currentPage: action.pageNumber}
        }
        case 'SET-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return copyState
    }
}

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW' as const,
        userId,
    }
}

export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW' as const,
        userId,
    }
}

export const setUsersAC = (users: Array<userItemType>) => {
    return {
        type: 'SET-USERS' as const,
        users,
    }
}

export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT' as const,
        totalUsersCount,
    }
}

export const changeCurrentPageAC = (pageNumber: number) => {
    return {
        type: 'CHANGE-CURRENT-PAGE' as const,
        pageNumber,
    }
}

export const setIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'SET-IS-FETCHING' as const,
        isFetching,
    }
}