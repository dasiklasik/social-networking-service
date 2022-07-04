import {actionType, profileInfoType, profilePageType} from "./state";

enum PROFILE_TYPES {
    ADD_POST= 'ADD_POST',
    CHANGE_TYPED_MESSAGE = 'CHANGE_TYPED_MESSAGE',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
}


export type addPostType = ReturnType<typeof addPost>
export type changeTypedMessageType = ReturnType<typeof changeTypedMessage>
export type setUserProfileType = ReturnType<typeof setUserProfile>


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

const initialState: profilePageType = {
    postData: [
        {id: 1, message: 'Message', likesCount: '0' },
        {id: 2, message: 'Message 2', likesCount: '2' },
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
        userId: '1',
        photos: {
            small: '',
            large: '',
        },

    },
    newPostText: ''
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
            return {...newState, profileInfo: action.profileInfo}
        }
        default:
        return newState
    }
}