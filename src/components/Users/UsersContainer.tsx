import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {actionType, stateType} from "../../redux/state";
import {followAC, setUsersAC, unfollowAC, userItemType} from "../../redux/usersReducer";

const mapStateToProps = (state: stateType) => {
    debugger
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: (action: actionType) => void) => {
    return {
        followUser: (userId: string) => dispatch(followAC(userId)),
        unfollowUser: (userId: string) => dispatch(unfollowAC(userId)),
        setUsers: (users: Array<userItemType>) => {
            dispatch(setUsersAC(users))
        }
    }
}



export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)