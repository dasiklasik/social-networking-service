import React from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import {authUser, logout} from "../../redux/reducers/auth-reducer";
import {reduxStoreType} from "../../redux/redux-store";

type HeaderContainerPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
                logout={this.props.logout}
            />
        )
    }
}

const mapStateToProps = (state: reduxStoreType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

const funcProps = {
    logout,
}

export default connect(mapStateToProps, funcProps)(HeaderContainer)