import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfileData, setProfileStatus} from "../../redux/profileReducer";
import {profileInfoType} from "../../redux/state";
import {Params, useParams} from "react-router-dom";
import {reduxStoreType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "@reduxjs/toolkit";

type ProfileContainerPropsType = {
    profile: profileInfoType
    getProfileData: (userId: number) => void
    url: Readonly<Params<string>>
    setProfileStatus: (status: string) => void
}


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.url['userId']
        if (userId === undefined) {
            this.props.profile?.userId ? userId = this.props.profile.userId : userId = '2'
        }
        this.props.getProfileData(+userId)
    }

    render() {

        return (
            <Profile
                profile={this.props.profile}
                setProfileStatus={this.props.setProfileStatus}
            />
        )
    }
}

const mapStateToProps = (state: reduxStoreType) => {
    return {
        profile: state.profilePage.profileInfo,
    }
}

type ProfileContainerWithUrlPropsType = {
    profile: profileInfoType
    getProfileData: (userId: number) => void
    setProfileStatus: (status: string) => void
}

const ProfileContainerWithUrl = (props: ProfileContainerWithUrlPropsType) => {
    const url = useParams()

    return (
        <ProfileContainer {...props} url={url}/>
    )
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileData, setProfileStatus}),
    withAuthRedirect,
)(ProfileContainerWithUrl)
