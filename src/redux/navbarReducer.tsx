import {actionType, navbarType, userItemType} from "./state";


const initialState: navbarType = {
    friendsData: [
        {id: "1", name: 'Kate', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'},
        {id: "2", name: 'Dasha', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'},
        {id: "3", name: 'Max', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'},
        {id: "4", name: 'Luck', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'}
    ]
}

export type addFriendACType = ReturnType<typeof addFriendAC>


export const navBarReducer = (state: navbarType = initialState, action: actionType) => {
    debugger
    let copyState = {...state}
    switch (action.type) {
        case "ADD-FRIEND": {
            debugger
            copyState.friendsData.push({id: "1", name: 'Kate', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'})
            console.log(copyState)
            debugger
            return {...copyState}
        }
        default:
            return copyState;
    }

}

export const addFriendAC = (friendInfo: userItemType) => {
    debugger
    return {
        type: 'ADD-FRIEND' as const,
        friendInfo,
    }
}