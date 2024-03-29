import {actionType, profileInfoType, profilePageType} from "../state";
import {Dispatch} from "@reduxjs/toolkit";
import {profileAPI} from "../../api/api";

enum PROFILE_TYPES {
    ADD_POST = 'social_network/profile/ADD_POST',
    DELETE_POST = 'social_network/profile/DELETE_POST',
    SET_USER_PROFILE = 'social_network/profile/SET_USER_PROFILE',
    CHANGE_STATUS = 'social_network/profile/CHANGE_STATUS',
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
        case PROFILE_TYPES.DELETE_POST:
            return {...state, postData: state.postData.filter(p => p.id !== action.id)}
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
export const deletePost = (id: number) =>
    ({type: PROFILE_TYPES.DELETE_POST, id} as const)
export const setUserProfile = (profileInfo: profileInfoType) =>
    ({type: PROFILE_TYPES.SET_USER_PROFILE, profileInfo,} as const)
export const changeStatus = (status: string) =>
    ({type: PROFILE_TYPES.CHANGE_STATUS, status,} as const)


//thunks
export const getProfileData = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getProfileData(userId)
    dispatch(setUserProfile(response))
}
export const getProfileStatus = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(changeStatus(response))
}

export const setProfileStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.setStatus(status)
    if (response.resultCode === 0) {
        dispatch(changeStatus(status))
    }
}


//types
export type addPostType = ReturnType<typeof addPost>
export type setUserProfileType = ReturnType<typeof setUserProfile>
export type changeStatusType = ReturnType<typeof changeStatus>
export type deletePostType = ReturnType<typeof deletePost>


