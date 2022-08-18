import React from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import {logout} from "../../redux/reducers/auth-reducer";
import {reduxStoreType} from "../../redux/redux-store";

const mapStateToProps = (state: reduxStoreType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

const funcProps = {
    logout,
}

export default connect(mapStateToProps, funcProps)(Header)