import React from "react";
import {actionType, dialogsPageType, messagesDataType} from "../state";

enum DIALOGS_TYPES {
    ADD_MESSAGE = 'ADD_MESSAGE',
}


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
        {id: 4, message: 'I haven\'t seen you for 5 years', myMessage: true}
    ],
    newDialogMessageText: ''
}

export const dialogsReducer = (state: dialogsPageType = initialState, action: actionType) => {
    let newState = {...state}
    switch (action.type) {
        case DIALOGS_TYPES.ADD_MESSAGE:
            let newMessage: messagesDataType = {
                id: 5,
                message: action.text,
                myMessage: true
            }
            return {...newState, messagesData: [...newState.messagesData, newMessage]}
        default:
            return newState
    }

}

//actions
export const addMessage = (text: string) => ({type: DIALOGS_TYPES.ADD_MESSAGE, text} as const)

//types
export type addMessageType = ReturnType<typeof addMessage>


