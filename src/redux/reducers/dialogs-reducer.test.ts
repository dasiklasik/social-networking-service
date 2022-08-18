import {dialogsPageType} from "../state";
import {addMessage, dialogsReducer} from "./dialogs-reducer";

let initialState: dialogsPageType

beforeEach(() => {
    return initialState = {
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
})

test('dialog reducer should add message', () => {
    const endState = dialogsReducer(initialState, addMessage('message'))

    expect(endState.messagesData.length).toBe(5)
    expect(endState.messagesData[4].message).toBe('message')
})