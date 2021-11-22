import {addPostActionType, changeTypedMessageActionType, profileReducer} from "./profileReducer";
import {addMessageActionType, changeTypedDialogMessageActionType, dialogsReducer} from "./dialogsReducer";
import {navBarReducer} from "./navbarReducer";










export type actionType = addPostActionType | changeTypedMessageActionType |
    changeTypedDialogMessageActionType | addMessageActionType



export type storeType = {
    _state: stateType
    getState: () => stateType
    _subscriber: () => void
    subscribe: (observer: () => void) => void
    changeTypedMessage: (message: string) => void
    addPost: () => void
    dispatch: (action: actionType) => void
}

export let store: storeType = {
    _state: {
        navbar: {
            friendsData: [
                {id: 1, name: 'Kate', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'},
                {id: 2, name: 'Dasha', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'},
                {id: 3, name: 'Max', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'},
                {id: 4, name: 'Luck', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'}
            ]
        },
        profilePage: {
            postData: [
                {id: 1, message: 'Message', likesCount: '0' },
                {id: 2, message: 'Message 2', likesCount: '2' },
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Kate', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'},
                {id: 2, name: 'Dasha', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'},
                {id: 3, name: 'Masha', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'}
            ],
            messagesData: [
                {id: 1, message: 'Hi', myMessage: true},
                {id: 2, message: 'Hello!', myMessage: false},
                {id: 3, message: 'How are you?', myMessage: true},
                {id: 4, message: 'I havent seen you for 5 years', myMessage: true}
            ],
            newDialogMessageText: ''
        },
    },
    getState() {
        return this._state
    },
    _subscriber() {
        console.log('no subscribers')
    },
    subscribe(observer: () => void) {
        this._subscriber = observer
    },
    changeTypedMessage(message: string) {
        this._state.profilePage.newPostText = message
        this._subscriber()
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: '0'
        }
        this._state.profilePage.newPostText = ''
        this._state.profilePage.postData.push(newPost)
        this._subscriber()
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navbar = navBarReducer(this._state.navbar, action)
        this._subscriber()
    }
}


// let renderEntireTree = () => {}

export type friendsDataType = {
    id: number
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

export type navbarType = {
    friendsData: Array<friendsDataType>
}

export type profilePageType = {
    postData: Array<postDataType>
    newPostText: string
}

export type dialogsPageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
    newDialogMessageText: string
}

export type stateType = {
    navbar: navbarType
    profilePage: profilePageType
    dialogsPage: dialogsPageType

}

// export const callbackHandler = (observer: () => void) => {
//     renderEntireTree = observer
// }
//
// export const state = {
//     navbar: {
//         friendsData: [
//             {id: 1, name: 'Kate', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'},
//             {id: 2, name: 'Dasha', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'},
//             {id: 3, name: 'Max', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'},
//             {id: 4, name: 'Luck', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'}
//         ]
//     },
//     profilePage: {
//         postData: [
//             {id: 1, message: 'Message', likesCount: '0' },
//             {id: 2, message: 'Message 2', likesCount: '2' },
//         ],
//         newPostText: ''
//     },
//     dialogsPage: {
//         dialogsData: [
//             {id: 1, name: 'Kate', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'},
//             {id: 2, name: 'Dasha', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'},
//             {id: 3, name: 'Masha', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'}
//         ],
//         messagesData: [
//             {id: 1, message: 'Hi', myMessage: true},
//             {id: 2, message: 'Hello!', myMessage: false},
//             {id: 3, message: 'How are you?', myMessage: true},
//             {id: 4, message: 'I havent seen you for 5 years', myMessage: true}
//         ],
//     },
// }
//
//
// export const changeTypedMessage = (message: string) => {
//     state.profilePage.newPostText = message
//     renderEntireTree()
// }
//
// export const addPost = () => {
//     let newPost: postDataType = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: '0'
//     }
//     state.profilePage.newPostText = ''
//
//     state.profilePage.postData.push(newPost)
//     renderEntireTree()
// }
