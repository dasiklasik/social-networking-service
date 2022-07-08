import {combineReducers, createStore, EmptyObject, Store} from "@reduxjs/toolkit";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {navBarReducer} from "./navbarReducer";
import {actionType, dialogsDataType, messagesDataType, navbarType, profilePageType} from "./state";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./auth-reducer";



let reducer = combineReducers({
    navbar: navBarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type reduxStoreType = ReturnType<typeof reducer>

// export type reduxStoreType = Store<EmptyObject & {navbar: navbarType, profilePage: profilePageType, dialogsPage: {dialogsData: dialogsDataType[], messagesData: messagesDataType[], newDialogMessageText: string}}, actionType>

export const store = createStore(reducer)




