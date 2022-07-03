import React from "react";
import {userItemType} from "../../redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";

type usersPropsType = {
    users: Array<userItemType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsers: (users: Array<userItemType>) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    changeCurrentPage: (pageNumber: number) => void
}

export class UsersAPIComponent extends React.Component<usersPropsType> {

    componentDidMount() {
        this.getUsers()
    }

    constructor(props: usersPropsType) {
        super(props);
    }

    getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render = () => {

        return (
            <Users
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followUser={this.props.followUser}
                unfollowUser={this.props.unfollowUser}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
            />
        )


    }
}

