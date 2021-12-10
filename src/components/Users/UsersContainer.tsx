import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {actionType, stateType, userItemType} from "../../redux/state";
import {addFriendAC} from "../../redux/navbarReducer";
import {testAC} from "../../redux/usersReducer";

const mapStateToProps = (state: stateType) => {
    return {
        usersData: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: (action: actionType) => void) => {
    debugger
    return {
        addFriend: (friendInfo: userItemType) => dispatch(addFriendAC(friendInfo)),
        test: () => dispatch(testAC())
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)