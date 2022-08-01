import {AnyAction, ThunkDispatch} from "@reduxjs/toolkit";
import {reduxStoreType} from "../redux-store";
import {authUser} from "./auth-reducer";

enum APP_TYPES {
    INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS',
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
        default: return state
    }
}

//actions
const initializedSuccess = () => ({type: APP_TYPES.INITIALIZED_SUCCESS} as const)

//thunks
export const initialize = () => (dispatch: ThunkDispatch<reduxStoreType, void, AnyAction>) => {
    dispatch(authUser())
        .then(response => {
            dispatch(initializedSuccess())
        })
}

//types
type initialStateType = {
    initialized: boolean
}

type initializedSuccessType = ReturnType<typeof initializedSuccess>

type actionType = initializedSuccessType