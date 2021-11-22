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

export const dialogsReducer = (state: dialogsPageType, action: actionType) => {

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

