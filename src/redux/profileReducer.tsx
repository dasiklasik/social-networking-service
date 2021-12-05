import {actionType, profilePageType, stateType} from "./state";


export type addPostActionType = {
    type: 'ADD_POST'
}
export type changeTypedMessageActionType = {
    type: 'CHANGE_TYPED_MESSAGE'
    message: string
}
export const addPostActionCreator = (): addPostActionType => {
    return {
        type: ADD_POST
    }
}
export const changeTypedMessageActionCreator = (message: string): changeTypedMessageActionType => {
    return {
        type: CHANGE_TYPED_MESSAGE,
        message
    }
}

const ADD_POST = 'ADD_POST'
const CHANGE_TYPED_MESSAGE = 'CHANGE_TYPED_MESSAGE'


const initialState: profilePageType = {
    postData: [
        {id: 1, message: 'Message', likesCount: '0' },
        {id: 2, message: 'Message 2', likesCount: '2' },
    ],
    profileInfo: {
        firstName: 'Darya',
        lastName: "Samsonovich",
        dateOfBirth: '11.04.1999',
        city: 'Minsk',
        education: 'university',
        webSite: 'none'
    },
    newPostText: ''
}

export const profileReducer = (state: profilePageType = initialState, action: actionType): profilePageType => {
    let newState = {...state}
    switch (action.type) {
        case ADD_POST:
            debugger

            newState.postData.push({id: 5, message: state.newPostText, likesCount: '0'})
            newState.newPostText = ''
            console.log(newState)

            return newState;
        case CHANGE_TYPED_MESSAGE:
            if (action.message) {
                newState.newPostText = action.message
            }
            return newState
        default:
        return newState
    }
}