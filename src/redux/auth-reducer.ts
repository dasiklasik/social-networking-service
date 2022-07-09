import {actionType} from "./state";

enum AUTH_TYPES {
    SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
}

export type authStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: authStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case AUTH_TYPES.SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            }
        default: return state
    }
}


export type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (payload: {id: number, email: string, login: string}) => {
    return {
        type: AUTH_TYPES.SET_AUTH_USER_DATA as const,
        payload,
    }
}