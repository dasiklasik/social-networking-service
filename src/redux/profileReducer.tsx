import {actionType, profileInfoType, profilePageType} from "./state";
import {Dispatch} from "@reduxjs/toolkit";
import {profileAPI} from "../api/api";

enum PROFILE_TYPES {
    ADD_POST = 'ADD_POST',
    CHANGE_TYPED_MESSAGE = 'CHANGE_TYPED_MESSAGE',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    CHANGE_STATUS = 'CHANGE_STATUS',
}


export type addPostType = ReturnType<typeof addPost>
export type changeTypedMessageType = ReturnType<typeof changeTypedMessage>
export type setUserProfileType = ReturnType<typeof setUserProfile>
export type changeStatusType = ReturnType<typeof changeStatus>


export const addPost = () => {
    return {
        type: PROFILE_TYPES.ADD_POST as const,
    }
}
export const changeTypedMessage = (message: string) => {
    return {
        type: PROFILE_TYPES.CHANGE_TYPED_MESSAGE as const,
        message,
    }
}

export const setUserProfile = (profileInfo: profileInfoType) => {
    return {
        type: PROFILE_TYPES.SET_USER_PROFILE as const,
        profileInfo,
    }
}

export const changeStatus = (status: string) => {
    return {
        type: PROFILE_TYPES.CHANGE_STATUS as const,
        status,
    }
}

export const getProfileData = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfileData(userId)
            .then(response => {
                dispatch(setUserProfile(response))
            })

    }
}

export const getProfileStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => dispatch(changeStatus(response)))
}

export const setProfileStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.setStatus(status)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(changeStatus(status))
                }
            })
    }
}


const initialState: profilePageType = {
    postData: [
        {id: 1, message: 'Message', likesCount: '0'},
        {id: 2, message: 'Message 2', likesCount: '2'},
    ],
    profileInfo: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: '',
        photos: {
            small: '',
            large: '',
        },
    },
    newPostText: '',
    status: 'hi',
}

export const profileReducer = (state: profilePageType = initialState, action: actionType): profilePageType => {
    let newState = {...state}
    switch (action.type) {
        case PROFILE_TYPES.ADD_POST:
            newState.postData = [...state.postData]
            newState.postData.push({id: 5, message: state.newPostText, likesCount: '0'})
            newState.newPostText = ''

            return newState;
        case PROFILE_TYPES.CHANGE_TYPED_MESSAGE:
            if (action.message) {
                newState.newPostText = action.message
            }
            return newState
        case PROFILE_TYPES.SET_USER_PROFILE: {
            return {...newState, profileInfo: {...action.profileInfo}}
        }
        case PROFILE_TYPES.CHANGE_STATUS: {
            let newState = {...state}
            return {...newState, status: action.status}
        }
        default:
            return newState
    }
}


