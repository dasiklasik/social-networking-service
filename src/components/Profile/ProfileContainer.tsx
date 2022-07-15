import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfileData} from "../../redux/profileReducer";
import {profileInfoType} from "../../redux/state";
import {Navigate, Params, useParams} from "react-router-dom";
import {reduxStoreType} from "../../redux/redux-store";

type ProfileContainerPropsType = {
    profile: profileInfoType
    getProfileData: (userId: number) => void
    url:  Readonly<Params<string>>
    isAuth: boolean
}


class ProfileContainer extends React.Component<ProfileContainerPropsType> {


    componentDidMount() {
        debugger
        let userId = this.props.url['userId']
        if (userId) {
            this.props.profile?.userId ? userId = this.props.profile.userId : userId = '2'
            this.props.getProfileData(+userId)
        }

    }

    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'}/>
        return (
            <Profile
                profile={this.props.profile}
            />
        )
    }
}

const mapStateToProps = (state: reduxStoreType) => {
    return {
        profile: state.profilePage.profileInfo,
        isAuth: state.auth.isAuth,
    }
}

type ProfileContainerWithUrlPropsType = {
    profile: profileInfoType
    getProfileData: (userId: number) => void
    isAuth: boolean
}

const ProfileContainerWithUrl = (props: ProfileContainerWithUrlPropsType) => {
    const url = useParams()

    return (
        <ProfileContainer {...props} url={url}/>
    )
}


export default connect(mapStateToProps, {getProfileData})(ProfileContainerWithUrl)