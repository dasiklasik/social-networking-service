import React from "react";
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {stateType} from "../../../redux/state";

const mapStateToProps = (state: stateType) => {
    return {
        profileInfoData: state.profilePage.profileInfo
    }
}

export const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo)