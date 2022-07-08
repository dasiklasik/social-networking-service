import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {profileInfoType, stateType} from "../../redux/state";
import {Params, useParams} from "react-router-dom";

type ProfileContainerPropsType = {
    profile: profileInfoType
    setUserProfile: (profileInfo: profileInfoType) => void
    url:  Readonly<Params<string>>
}


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.url['userId']
        if (!userId) userId = '2'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
    setUserProfile: (profileInfo: profileInfoType) => void
}

const ProfileContainerWithUrl = (props: ProfileContainerWithUrlPropsType) => {
    const url = useParams()

    return (
        <ProfileContainer {...props} url={url}/>
    )
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithUrl)