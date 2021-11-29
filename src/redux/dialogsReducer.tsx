import React from "react";
import {actionType, dialogsPageType, messagesDataType} from "./state";


export type addMessageActionType = {
    type: 'ADD_MESSAGE'
}
export type changeTypedDialogMessageActionType = {
    type: 'CHANGE_TYPED_DIALOG_MESSAGE'
    message: string
}
export const changeTypedDialogMessageActionCreator = (message: string): changeTypedDialogMessageActionType => {
    return {
        type: CHANGE_TYPED_DIALOG_MESSAGE,
        message
    }
}
export const addMessageActionCreator = (): addMessageActionType => {
    return {
        type: ADD_MESSAGE,
    }
}
const CHANGE_TYPED_DIALOG_MESSAGE = 'CHANGE_TYPED_DIALOG_MESSAGE'
const ADD_MESSAGE = 'ADD_MESSAGE'

const initialState: dialogsPageType = {
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
}

export const dialogsReducer = (state: dialogsPageType = initialState, action: actionType) => {
    switch (action.type) {
        case CHANGE_TYPED_DIALOG_MESSAGE:
            state.newDialogMessageText = action.message
            return state
        case ADD_MESSAGE:
            let newMessage: messagesDataType = {
                id: 5,
                message: state.newDialogMessageText,
                myMessage: true
            }
            state.newDialogMessageText = ''
            state.messagesData.push(newMessage)
            return state
        default:
            return state
    }

}

