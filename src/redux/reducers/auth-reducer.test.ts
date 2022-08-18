import {authReducer, authStateType, logoutUser, setAuthUserData} from "./auth-reducer";

let initialState: authStateType

beforeEach(() => {
    return initialState = {
        id: null,
        email: null,
        login: null,
        isAuth: false
    }
})

test('auth reducer should set auth user data', () => {

    const payload = {
        id: 3,
        email: 'test@test.ru',
        login: 'test'
    }

    const endState = authReducer(initialState, setAuthUserData(payload))

    expect(endState.id).toBe(3)
    expect(endState.email).toBe('test@test.ru')
    expect(endState.login).toBe('test')
    expect(endState.isAuth).toBe(true)
})


test('auth reducer should log out user', () => {

    const endState = authReducer(initialState, logoutUser())

    expect(endState.id).toBe(null)
    expect(endState.email).toBe(null)
    expect(endState.login).toBe(null)
    expect(endState.isAuth).toBe(false)
})