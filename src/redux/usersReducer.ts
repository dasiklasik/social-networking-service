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
    users: []
}


export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>


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
            let newState = {...state, users: [...state.users, ...action.users]}
            debugger
            return newState
        }
        default:
            return copyState
    }
}

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW' as const,
        userId
    }
}

export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW' as const,
        userId
    }
}

export const setUsersAC = (users: Array<userItemType>) => {
    return {
        type: 'SET-USERS' as const,
        users
    }
}