import {actionType, profileInfoType, profilePageType} from "./state";
import {Dispatch} from "@reduxjs/toolkit";
import {profileAPI} from "../api/api";

enum PROFILE_TYPES {
    ADD_POST = 'ADD_POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    CHANGE_STATUS = 'CHANGE_STATUS',
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
    switch (action.type) {
        case PROFILE_TYPES.ADD_POST:
            const newPost = {id: 3, message: action.text, likesCount: '0',}
            return {...state, postData: [newPost, ...state.postData]}
        case PROFILE_TYPES.SET_USER_PROFILE:
            return {...state, profileInfo: {...action.profileInfo}}
        case PROFILE_TYPES.CHANGE_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}


//actions
export const addPost = (text: string) =>
    ({type: PROFILE_TYPES.ADD_POST, text} as const)
export const setUserProfile = (profileInfo: profileInfoType) =>
    ({type: PROFILE_TYPES.SET_USER_PROFILE, profileInfo,} as const)
export const changeStatus = (status: string) =>
    ({type: PROFILE_TYPES.CHANGE_STATUS, status,} as const)


//thunks
export const getProfileData = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getProfileData(userId)
        .then(response => {
            dispatch(setUserProfile(response))
        })
}
export const getProfileStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => dispatch(changeStatus(response)))
}

export const setProfileStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.setStatus(status)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(changeStatus(status))
            }
        })
}


//types
export type addPostType = ReturnType<typeof addPost>
export type setUserProfileType = ReturnType<typeof setUserProfile>
export type changeStatusType = ReturnType<typeof changeStatus>


