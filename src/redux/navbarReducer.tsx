import {navbarType, userItemType} from "./state";


const initialState: navbarType = {
    friendsData: [
        {id: "1", name: 'Kate', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'},
        {id: "2", name: 'Dasha', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'},
        {id: "3", name: 'Max', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'},
        {id: "4", name: 'Luck', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'}
    ]
}

export type addFriendACType = ReturnType<typeof addFriendAC>


export type navbarActionType = addFriendACType

export const navBarReducer = (state: navbarType = initialState, action: navbarActionType) => {
    debugger
    let copyState = {...state}
    switch (action.type) {
        case "ADD-FRIEND": {

            return copyState.friendsData.push
            ({id: '5', name: action.friendInfo.name, avatar: action.friendInfo.avatar})
        }
    }
    return copyState;
}

export const addFriendAC = (friendInfo: userItemType) => {
    debugger
    return {
        type: 'ADD-FRIEND' as const,
        friendInfo,
    }
}