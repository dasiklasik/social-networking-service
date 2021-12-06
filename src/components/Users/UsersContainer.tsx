import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {actionType, stateType, userItemType} from "../../redux/state";
import {addFriendAC, navbarActionType} from "../../redux/navbarReducer";

const mapStateToProps = (state: stateType) => {

    return {
        usersData: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: (action: actionType) => void) => {
    return {
        addFriend: (friendInfo: userItemType) => dispatch(addFriendAC(friendInfo))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)