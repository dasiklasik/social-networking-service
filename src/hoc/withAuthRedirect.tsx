import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {reduxStoreType} from "../redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: reduxStoreType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T> (Component: ComponentType<T>) {
    debugger
    function RedirectComponent(props: mapStateToPropsType) {

        const {isAuth, ...restProps} = props
        debugger
        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as T}/>;
    }



    return connect(mapStateToProps)(RedirectComponent)
}