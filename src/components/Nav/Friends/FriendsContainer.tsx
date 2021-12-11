import React from "react";
import {connect} from "react-redux";
import {Friends} from "./Friends";
import {stateType} from "../../../redux/state";

const mapStateToProps = (state: stateType)=> {
    return {
        friendsData: state.navbar.friendsData
    }
}

export const FriendsContainer = connect(mapStateToProps)(Friends)