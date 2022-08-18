import {appReducer, initializedSuccess} from "./app-reducer";

type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType;

beforeEach(() => {
    return initialState  = {
        initialized: false
    }
})

test('app reducer should change initialize status to true', () => {
    const endState = appReducer(initialState, initializedSuccess())

    expect(endState.initialized).toBe(true)
})