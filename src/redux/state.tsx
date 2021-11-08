import {rerenderCode} from "../render";

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
}

export type dialogsPageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}

export type stateType = {
    navbar: navbarType
    profilePage: profilePageType
    dialogsPage: dialogsPageType

}

export const state = {
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
        ]
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
    },
}


export const changeTypedMessage = (message: string) => {
    typedMessage = message
    rerenderCode(state, addPost, typedMessage, changeTypedMessage)
}
export let typedMessage = '';

export const addPost = (postMessage: string) => {
    let newPost: postDataType = {
        id: 5,
        message: postMessage,
        likesCount: '0'
    }

    state.profilePage.postData.push(newPost)
    rerenderCode(state, addPost, typedMessage, changeTypedMessage)
}
