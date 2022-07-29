import {addPostType, changeStatusType, setUserProfileType} from "./profileReducer";
import {addMessageType} from "./dialogsReducer";
import {
    changeCurrentPageType, setFollowingInProgressType, setIsFetchingType,
    setTotalUsersCountType,
    setUsersType, toggleFollowType,
    userItemType
} from "./usersReducer";
import {setAuthUserDataType} from "./auth-reducer";


export type actionType = addPostType |
    addMessageType |
    setUsersType | setTotalUsersCountType | changeCurrentPageType | setIsFetchingType | setUserProfileType
    | setAuthUserDataType | toggleFollowType | setFollowingInProgressType | changeStatusType


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
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: string
    photos: {
        small: string | null
        large: string | null
    },
}

export type navbarType = {
    friendsData: Array<friendsDataType>
}

export type profilePageType = {
    postData: Array<postDataType>
    profileInfo: profileInfoType
    newPostText: string
    status: string
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
    followingInProgress: Array<number>
}


export type stateType = {
    navbar: navbarType
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    usersPage: usersInfo
}

