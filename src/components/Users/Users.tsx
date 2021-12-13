import React from "react";
import {UserItem} from "./UserItem/UserItem";
import {userItemType} from "../../redux/usersReducer";
import axios from "axios";

type usersPropsType = {
    users: Array<userItemType>
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsers: (users: Array<userItemType>) => void
}

export class Users extends React.Component<usersPropsType> {

    componentDidMount() {
        this.getUsers()
    }

    constructor(props: usersPropsType) {
        super(props);
        // this.getUsers()
    }

    getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger
            this.props.setUsers(response.data.items)
        })
    }
    render = () => {
        return (
            <div>
                <h2>Users</h2>
                {this.props.users.map(t => <UserItem userInfo={t}
                                                     followUser={this.props.followUser}
                                                     unfollowUser={this.props.unfollowUser}/>)}
            </div>
        )
    }
}