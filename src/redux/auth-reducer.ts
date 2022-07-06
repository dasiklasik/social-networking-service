import {actionType} from "./state";

enum AUTH_TYPES {
    SET_USER_DATA = 'SET_USER_DATA'
}

type initialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
}

const initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
}


export const authReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case AUTH_TYPES.SET_USER_DATA:
            return {...state, ...action.payload}
        default: return state
    }
}


export type setUserDataType = ReturnType<typeof setUserData>
const setUserData = (payload: {id: number, email: number, login: number}) => {
    return {
        type: AUTH_TYPES.SET_USER_DATA as const,
        payload,
    }
}