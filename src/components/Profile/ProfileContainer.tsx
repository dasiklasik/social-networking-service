import React from "react";
import {Profile} from "./Profile";
import axios from "axios";

type ProfileContainerPropsType = {}


export class ProfileContainer extends React.Component<ProfileContainerPropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                // this.props.setUsers(response.data.items)
                // this.props.setTotalUsersCount(response.data.totalCount)
                // this.props.setIsFetching(false)
            })
    }

    render() {
        return (
            <Profile/>
        )
    }
}