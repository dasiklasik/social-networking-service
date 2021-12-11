import {actionType, usersInfo,} from "./state";


export type userItemType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: {country: string, city: string}
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
            return {...copyState, users: copyState.users
                    .map(t => t.id === action.userId? {...t, followed: true} : t)}
        }
        case 'UNFOLLOW': {
            return {...copyState, users: copyState.users
                    .map(t => t.id === action.userId? {...t, followed: false} : t)}
        }
        case 'SET-USERS': {
            let newState =  {...state, users: [...state.users, ...action.users]}
            debugger
            return newState
        }
        default:
            return copyState
    }
}

export const followAC = (userId: string) => {
    return {
        type: 'FOLLOW' as const,
        userId
    }
}

export const unfollowAC = (userId: string) => {
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