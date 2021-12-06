import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {stateType} from "../../redux/state";
import {UserItem} from "./UserItem/UserItem";

const mapStateToProps = (state: stateType) => {
    return {
        usersData: state.usersPage.map(t => <UserItem userInfo={t}/>)
    }
}

export const UsersContainer = connect(mapStateToProps)(Users)