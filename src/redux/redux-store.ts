import {combineReducers, createStore, EmptyObject, Store} from "@reduxjs/toolkit";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {navBarReducer} from "./navbarReducer";
import {actionType, dialogsPageType, navbarType, profilePageType } from "./state";

let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navBarReducer
})

export type reduxStoreType = Store<EmptyObject & { profilePage: profilePageType; dialogsPage: dialogsPageType; navbar: navbarType; }, actionType>

export let store = createStore(reducer)