
export type dialogsDataType = {
    id: number
    name: string
}

export type messagesDataType = {
    id: number
    message: string
}

export type postDataType = {
    id: number
    message: string
    likesCount: string
}

export type profilePageType = {
    postData: Array<postDataType>
}

export type dialogsPageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}

export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType

}

export const state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Message', likesCount: '0' },
            {id: 2, message: 'Message 2', likesCount: '2' },
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Kate'},
            {id: 2, name: 'Dasha'},
            {id: 3, name: 'Masha'}
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello!'}
        ],
    },
}
