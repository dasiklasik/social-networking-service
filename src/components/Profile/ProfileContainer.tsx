import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfileData, getProfileStatus, setProfileStatus} from "../../redux/reducers/profile-reducer";
import {profileInfoType} from "../../redux/state";
import {Navigate, Params, useParams} from "react-router-dom";
import {reduxStoreType} from "../../redux/redux-store";
import {compose} from "@reduxjs/toolkit";

type ProfileContainerPropsType = {
    profile: profileInfoType
    status: string
    getProfileData: (userId: number) => void
    url: Readonly<Params<string>>
    setProfileStatus: (status: string) => void
    getProfileStatus: (userId: number) => void
    authUserId: number
}


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId: number | string | undefined = this.props.url['userId']
        if (userId === undefined) {
            this.props.authUserId ? userId = this.props.authUserId : userId = '2'
        }
        this.props.getProfileData(+userId)
        this.props.getProfileStatus(+userId)
    }

    render() {
        if (!this.props.url['userId'] && !this.props.authUserId) return <Navigate to={'/login'}/>
        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                setProfileStatus={this.props.setProfileStatus}
            />
        )
    }
}

type ProfileContainerWithUrlPropsType = {
    profile: profileInfoType
    status: string
    getProfileData: (userId: number) => void
    setProfileStatus: (status: string) => void
    getProfileStatus: (userId: number) => void
    authUserId: number
}

const ProfileContainerWithUrl = (props: ProfileContainerWithUrlPropsType) => {
    const url = useParams()
    return (
        <ProfileContainer {...props} url={url}/>
    )
}

const mapStateToProps = (state: reduxStoreType) => {
    return {
        profile: state.profilePage.profileInfo,
        status: state.profilePage.status,
        authUserId: state.auth.id
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileData, setProfileStatus, getProfileStatus}),
)(ProfileContainerWithUrl)
