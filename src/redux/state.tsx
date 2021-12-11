import {addPostActionType, changeTypedMessageActionType} from "./profileReducer";
import {addMessageActionType, changeTypedDialogMessageActionType} from "./dialogsReducer";
import {followACType, setUsersACType, unfollowACType, userItemType} from "./usersReducer";


export type actionType = addPostActionType | changeTypedMessageActionType |
    changeTypedDialogMessageActionType | addMessageActionType | unfollowACType | followACType |
    setUsersACType


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
    firstName: string
    lastName: string
    dateOfBirth: string
    city: string
    education: string
    webSite: string
}

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
}


export type stateType = {
    navbar: navbarType
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    usersPage: usersInfo

}

