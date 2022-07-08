import React from "react";
import {UserItem} from "./UserItem";
import {userItemType} from "../../../redux/usersReducer";
import axios from "axios";


type UserItemContainerPropsType = {
    userInfo: userItemType
    toggleFollow: (userId: number, isFollowing: boolean) => void
}

export class UserItemContainer extends React.Component<UserItemContainerPropsType> {

    componentDidMount() {
        this.checkFollow()

    }

    checkFollow = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/follow/${this.props.userInfo.id}`,
            {withCredentials: true})
            .then((response) => {
                this.props.toggleFollow(this.props.userInfo.id, response.data)
            })
    }

    render() {

        return  <UserItem {...this.props}/>
    }
}


