import {userItemType} from "./state";

export const initialState: Array<userItemType> = [
    {
        avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg',
        name: 'Dasha S.',
        status: 'Everything is fine!',
        country: 'Belarus',
        city: 'Minsk'
    },
    {
        avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg',
        name: 'Dasha S.',
        status: 'Everything is fine!',
        country: 'Belarus',
        city: 'Minsk'
    },
    {
        avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg',
        name: 'Dasha S.',
        status: 'Everything is fine!',
        country: 'Belarus',
        city: 'Minsk'
    }
]

export const userReducer = (state = initialState, action: any) => {
    return state
}