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
    newPostText: ''
}

export const profileReducer = (state: profilePageType = initialState, action: actionType): profilePageType => {

    switch (action.type) {
        case ADD_POST:
            state.postData.push({id: 5, message: state.newPostText, likesCount: '0'})
            state.newPostText = ''
            console.log(state)

            return state;
        case CHANGE_TYPED_MESSAGE:

            if (action.message) {
                state.newPostText = action.message
            }
            return state
        default:
        return state
    }
}