import {AnyAction, Dispatch, ThunkDispatch} from "@reduxjs/toolkit";
import {authAPI} from "../../api/api";
import {formDataType} from "../../components/Login/LoginForm";
import {reduxStoreType} from "../redux-store";
import {stopSubmit} from "redux-form";

enum AUTH_TYPES {
    SET_AUTH_USER_DATA = 'social_network/auth/SET_AUTH_USER_DATA',
    LOGOUT_USER = 'social_network/auth/LOGOUT_USER',
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
            return {...state, ...action.payload, isAuth: true}
        case AUTH_TYPES.LOGOUT_USER:
            return {...state, id: null, email: null, login: null, isAuth: false}
        default:
            return state
    }
}


//actions
export const setAuthUserData = (payload: { id: number, email: string, login: string }) =>
    ({type: AUTH_TYPES.SET_AUTH_USER_DATA, payload} as const)
export const logoutUser = () =>
    ({type: AUTH_TYPES.LOGOUT_USER} as const)


//thunks
export const authUser = () => async (dispatch: Dispatch) => {
    const response = await authAPI.getAuth()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(response.data))
    }
}

export const login = (formData: formDataType) => async (dispatch: ThunkDispatch<reduxStoreType, void, AnyAction>) => {
    const response = await authAPI.login(formData)
    if (response.resultCode === 0) {
        dispatch(authUser())
    } else {
        dispatch(stopSubmit('login', {_error: response.messages[0]}))
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    const response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(logoutUser())
    }
}


//types
export type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export type logoutUserType = ReturnType<typeof logoutUser>

type actionType = setAuthUserDataType | logoutUserType

export type authStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}