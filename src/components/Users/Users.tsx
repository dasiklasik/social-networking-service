import React from "react";
import {UserItem} from "./UserItem/UserItem";
import {userItemType} from "../../redux/usersReducer";
import axios from "axios";
import s from './Users.module.css'

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

export class Users extends React.Component<usersPropsType> {

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

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []

        if (pagesCount <= 5) {
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i)
            }
        } else {
            for (let i = this.props.currentPage; i <= this.props.currentPage + 5; i++) {
                pages.push(i.toString())
            }
        }

        return (
            <div>
                <h2>Users</h2>
                <div>
                    {this.props.currentPage !== 1 && pagesCount >5 ? <span>... </span> : ''}
                    {
                        pages.map(i =>
                            <span
                                className={this.props.currentPage === i ? s.selected : ''}
                                onClick={() => this.onPageChanged(+i)}
                            >{i} </span>)
                    }
                    {
                        pagesCount > 5 ? <span>...</span> : ''
                    }
                </div>
                {this.props.users.map(t => <UserItem userInfo={t}
                                                     followUser={this.props.followUser}
                                                     unfollowUser={this.props.unfollowUser}/>)}
            </div>
        )
    }
}