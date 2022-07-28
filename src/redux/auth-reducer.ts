import {actionType} from "./state";
import {Dispatch} from "@reduxjs/toolkit";
import {authAPI, profileAPI} from "../api/api";
import {setUserProfile} from "./profileReducer";

enum AUTH_TYPES {
    SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA',
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
        default:
            return state
    }
}


//actions
export const setAuthUserData = (payload: { id: number, email: string, login: string }) =>
    ({type: AUTH_TYPES.SET_AUTH_USER_DATA, payload} as const)


//thunks
export const authUser = () => (dispatch: Dispatch) => {
    authAPI.getAuth()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(response.data))
                return profileAPI.getProfileData(response.data.id)
            }
        }).then((response) => {
        if (response) {
            dispatch(setUserProfile(response))
        }
    })
}


//types
export type setAuthUserDataType = ReturnType<typeof setAuthUserData>

export type authStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}