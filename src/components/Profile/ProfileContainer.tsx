import React, {useEffect} from "react";
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
    setProfileStatus: (status: string) => void
    getProfileStatus: (userId: number) => void
    authUserId: number
}

const ProfileContainer = (props: ProfileContainerPropsType) => {

    const {
        profile,
        getProfileData,
        getProfileStatus,
        status,
        setProfileStatus,
        authUserId,
    } = props

    useEffect(() => {
        let userId: number | string | undefined = url['userId']
        if (userId === undefined) {
            authUserId ? userId = authUserId : userId = '2'
        }
        getProfileData(+userId)
        getProfileStatus(+userId)
    }, [])

    const url = useParams()

    if (!url['userId'] && !authUserId) return <Navigate to={'/login'}/>
    return (
        <Profile
            profile={profile}
            status={status}
            setProfileStatus={setProfileStatus}
        />
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
)(ProfileContainer)
