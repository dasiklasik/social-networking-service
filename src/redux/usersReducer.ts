import {actionType, userItemType} from "./state";

export const initialState: Array<userItemType> = [
    {id: '1',
        avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg',
        name: 'Dasha S.',
        status: 'Everything is fine!',
        country: 'Belarus',
        city: 'Minsk'
    },
    {id: '2',
        avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg',
        name: 'Dasha S.',
        status: 'Everything is fine!',
        country: 'Belarus',
        city: 'Minsk'
    },
    {id: '3',
        avatar: 'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg',
        name: 'Dasha S.',
        status: 'Everything is fine!',
        country: 'Belarus',
        city: 'Minsk'
    }
]


export type testACType = ReturnType<typeof testAC>



export const userReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case 'TEST': {
            console.log('test')
            return [...state]
        }
    }
    return state
}

export const testAC = () => {
    debugger
    return {
        type: 'TEST' as const
    }
}