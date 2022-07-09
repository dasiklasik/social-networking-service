import React from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";
import {reduxStoreType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profileReducer";
import {profileInfoType} from "../../redux/state";
import {authAPI, profileAPI} from "../../api/api";

type HeaderContainerPropsType = {
    isAuth: boolean
    login: string | null
    setAuthUserData: (data: { id: number, email: string, login: string }) => void,
    setUserProfile: (profileInfo: profileInfoType) => void,
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        authAPI.getAuth()
            .then(response => {
                if (response.resultCode === 0) {
                    this.props.setAuthUserData(response.data)
                    return profileAPI.getProfileData(response.data.id)
                }
            }).then((response) => {
            if (response) {
                console.log(response)
                this.props.setUserProfile(response)
            }
        })
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
    setAuthUserData,
    setUserProfile,
}

export default connect(mapStateToProps, funcProps)(HeaderContainer)