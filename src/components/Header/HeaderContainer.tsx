import React from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import {authUser} from "../../redux/auth-reducer";
import {reduxStoreType} from "../../redux/redux-store";

type HeaderContainerPropsType = {
    isAuth: boolean
    login: string | null
    authUser: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        debugger
        this.props.authUser()
    }

    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}

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
    authUser,
}

export default connect(mapStateToProps, funcProps)(HeaderContainer)