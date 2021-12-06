import {combineReducers, createStore, EmptyObject, Store} from "@reduxjs/toolkit";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {navBarReducer} from "./navbarReducer";
import {actionType, dialogsDataType, dialogsPageType, messagesDataType, navbarType, profilePageType} from "./state";
import {userReducer} from "./usersReducer";


let reducer = combineReducers({
    navbar: navBarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer
})


export type reduxStoreType = Store<EmptyObject & {navbar: navbarType, profilePage: profilePageType, dialogsPage: {dialogsData: dialogsDataType[], messagesData: messagesDataType[], newDialogMessageText: string}}, actionType>



export const store = createStore(reducer)


declare global {
    interface Window { store: reduxStoreType; }
}

window.store = store



