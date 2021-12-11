import {actionType, navbarType} from "./state";


const initialState: navbarType = {
    friendsData: [
        {id: "1", name: 'Kate', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'},
        {id: "2", name: 'Dasha', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'},
        {id: "3", name: 'Max', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'},
        {id: "4", name: 'Luck', avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'}
    ]
}


export const navBarReducer = (state: navbarType = initialState, action: actionType) => {
    return state
}
