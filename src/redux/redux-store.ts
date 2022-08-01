import {applyMiddleware, combineReducers, createStore, EmptyObject, Store} from "@reduxjs/toolkit";
import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {navBarReducer} from "./reducers/navbarReducer";
import {usersReducer} from "./reducers/usersReducer";
import {authReducer} from "./reducers/auth-reducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./reducers/app-reducer";




let reducer = combineReducers({
    navbar: navBarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

export type reduxStoreType = ReturnType<typeof reducer>

// export type reduxStoreType = Store<EmptyObject & {navbar: navbarType, profilePage: profilePageType, dialogsPage: {dialogsData: dialogsDataType[], messagesData: messagesDataType[], newDialogMessageText: string}}, actionType>

export const store = createStore(reducer, applyMiddleware(thunkMiddleWare))

//@ts-ignore
window.store = store



