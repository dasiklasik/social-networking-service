import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfileData} from "../../redux/profileReducer";
import {profileInfoType, stateType} from "../../redux/state";
import {Params, useParams} from "react-router-dom";

type ProfileContainerPropsType = {
    profile: profileInfoType
    getProfileData: (userId: number) => void
    url:  Readonly<Params<string>>
}


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.url['userId']
        if (!userId) userId = '2'
        this.props.getProfileData(+userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: stateType) => {
    return {
        profile: state.profilePage.profileInfo,
    }
}

type ProfileContainerWithUrlPropsType = {
    profile: profileInfoType
    getProfileData: (userId: number) => void
}

const ProfileContainerWithUrl = (props: ProfileContainerWithUrlPropsType) => {
    const url = useParams()

    return (
        <ProfileContainer {...props} url={url}/>
    )
}


export default connect(mapStateToProps, {getProfileData})(ProfileContainerWithUrl)