import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfileData} from "../../redux/profileReducer";
import {profileInfoType} from "../../redux/state";
import {Navigate, Params, useParams} from "react-router-dom";
import {reduxStoreType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type ProfileContainerPropsType = {
    profile: profileInfoType
    getProfileData: (userId: number) => void
    url:  Readonly<Params<string>>
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


const ProfileWithRedirect = withAuthRedirect(ProfileContainerWithUrl)



export default connect(mapStateToProps, {getProfileData})(ProfileWithRedirect)