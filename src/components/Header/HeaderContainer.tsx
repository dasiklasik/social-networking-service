import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {Header} from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";
import {reduxStoreType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profileReducer";
import {profileInfoType} from "../../redux/state";

type HeaderContainerPropsType = {
    isAuth: boolean
    login: string | null
    setAuthUserData: (data: { id: number, email: string, login: string }) => void,
    setUserProfile: (profileInfo: profileInfoType) => void,
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.getAuth()
    }

    getAuth = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`)
                }
            }).then((response) => {
            if (response) {
                this.props.setUserProfile(response.data)
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