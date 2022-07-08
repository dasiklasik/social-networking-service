import {addPostType, changeTypedMessageType, setUserProfileType} from "./profileReducer";
import {addMessageType, changeDialogMessageType} from "./dialogsReducer";
import {
    changeCurrentPageType,
    followType, setIsFetchingType,
    setTotalUsersCountType,
    setUsersType, toggleFollowType,
    unfollowType,
    userItemType
} from "./usersReducer";
import { setAuthUserDataType } from "./auth-reducer";


export type actionType = addPostType | changeTypedMessageType |
    addMessageType | changeDialogMessageType  |
    setUsersType | setTotalUsersCountType | changeCurrentPageType | setIsFetchingType | setUserProfileType
    | setAuthUserDataType |toggleFollowType



export type storeType = {
    _state: stateType
    getState: () => stateType
    _subscriber: () => void
    subscribe: (observer: () => void) => void
    changeTypedMessage: (message: string) => void
    addPost: () => void
    dispatch: (action: actionType) => void
}


export type friendsDataType = {
    id: string
    name: string
    avatar: string
}

export type dialogsDataType = {
    id: number
    name: string
    avatar: string
}

export type messagesDataType = {
    id: number
    message: string
    myMessage: boolean
}

export type postDataType = {
    id: number
    message: string
    likesCount: string
}

export type profileInfoType = {
    aboutMe: string|null
    contacts: {
        facebook: string|null
        website: string|null
        vk: string|null
        twitter: string|null
        instagram: string|null
        youtube: string|null
        github: string|null
        mainLink: string|null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string|null
    fullName: string|null
    userId: string
    photos: {
        small: string|null
        large: string|null
    }
} | null

export type navbarType = {
    friendsData: Array<friendsDataType>
}

export type profilePageType = {
    postData: Array<postDataType>
    profileInfo: profileInfoType
    newPostText: string
}

export type dialogsPageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
    newDialogMessageText: string
}

export type usersInfo = {
    users: Array<userItemType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


export type stateType = {
    navbar: navbarType
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    usersPage: usersInfo
}

