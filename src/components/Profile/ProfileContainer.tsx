import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfileData, getProfileStatus, setProfileStatus} from "../../redux/profileReducer";
import {profileInfoType} from "../../redux/state";
import {Params, useParams} from "react-router-dom";
import {reduxStoreType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "@reduxjs/toolkit";

type ProfileContainerPropsType = {
    profile: profileInfoType
    status: string
    getProfileData: (userId: number) => void
    url: Readonly<Params<string>>
    setProfileStatus: (status: string) => void
    getProfileStatus: (userId: number) => void
    userId: number
}


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId: number | string | undefined = this.props.url['userId']
        if (userId === undefined) {
            this.props.userId ? userId = this.props.userId : userId = '2'
        }
        this.props.getProfileData(+userId)
        this.props.getProfileStatus(+userId)
    }

    render() {

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
    userId: number
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
        userId: state.auth.id
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileData, setProfileStatus, getProfileStatus}),
    withAuthRedirect,
)(ProfileContainerWithUrl)
