import {reduxStoreType} from "../redux-store";

export const getIsAuth = (state: reduxStoreType) => {
    return state.auth.isAuth
}