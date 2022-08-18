import {AnyAction, ThunkDispatch} from "@reduxjs/toolkit";
import {reduxStoreType} from "../redux-store";
import {authUser} from "./auth-reducer";

enum APP_TYPES {
    INITIALIZED_SUCCESS = 'social_network/app/INITIALIZED_SUCCESS',
}

const initialState: initialStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case APP_TYPES.INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

//actions
export const initializedSuccess = () => ({type: APP_TYPES.INITIALIZED_SUCCESS} as const)

//thunks
export const initialize = () => async (dispatch: ThunkDispatch<reduxStoreType, void, AnyAction>) => {
    await dispatch(authUser())
    dispatch(initializedSuccess())
}

//types
type initialStateType = {
    initialized: boolean
}

type initializedSuccessType = ReturnType<typeof initializedSuccess>

type actionType = initializedSuccessType