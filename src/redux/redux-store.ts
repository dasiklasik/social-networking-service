import {combineReducers, createStore, EmptyObject, Store} from "@reduxjs/toolkit";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {navBarReducer} from "./navbarReducer";
import {actionType, dialogsDataType, dialogsPageType, messagesDataType, navbarType, profilePageType} from "./state";


let reducer = combineReducers({
    navbar: navBarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})


export type reduxStoreType = Store<EmptyObject & {navbar: navbarType, profilePage: profilePageType, dialogsPage: {dialogsData: dialogsDataType[], messagesData: messagesDataType[], newDialogMessageText: string}}, actionType>



export const store = createStore(reducer)


// let reducer = combineReducers({
//     profilePage: profileReducer,
//     dialogsPage: dialogsReducer,
//     navbar: navBarReducer
// })
//
// export type reduxStoreType = Store<EmptyObject & { profilePage: profilePageType; dialogsPage: dialogsPageType; navbar: navbarType; }, actionType>
//
// export let store = createStore(reducer)