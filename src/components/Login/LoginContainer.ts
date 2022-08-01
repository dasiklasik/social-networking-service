import {reduxStoreType} from "../../redux/redux-store";
import {login} from "../../redux/reducers/auth-reducer";
import {connect} from "react-redux";
import {Login} from "./Login";

const mapStateToProps = (state: reduxStoreType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const propsFunc = {
    login,
}

export const LoginContainer = connect(mapStateToProps, propsFunc)(Login)