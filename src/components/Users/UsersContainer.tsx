import React from "react";
import {connect} from "react-redux";
import {stateType} from "../../redux/state";
import {
    changeCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleFollow,
    userItemType
} from "../../redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";
import s from './Users.module.css'
import { Preloader } from "../Preloader/Preloader";
import {reduxStoreType} from "../../redux/redux-store";

type usersPropsType = {
    users: Array<userItemType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    toggleFollow: (userId: number, isFollowing: boolean) => void
    setUsers: (users: Array<userItemType>) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    changeCurrentPage: (pageNumber: number) => void
    setIsFetching: (isFetching: boolean) => void
    isAuth: boolean
}

class UsersContainer extends React.Component<usersPropsType> {

    componentDidMount() {
        this.getUsers()
    }

    constructor(props: usersPropsType) {
        super(props);
    }

    getUsers = () => {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,
            {withCredentials: true})
            .then(response => {
                debugger
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.setIsFetching(false)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`,
            {withCredentials: true})
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setIsFetching(false)
            })
    }

    render = () => {

        return (
            <>
                {
                    this.props.isFetching ?
                        <Preloader/>:
                        <Users
                            currentPage={this.props.currentPage}
                            onPageChanged={this.onPageChanged}
                            users={this.props.users}
                            toggleFollow={this.props.toggleFollow}
                            pageSize={this.props.pageSize}
                            totalUsersCount={this.props.totalUsersCount}
                            isAuth={this.props.isAuth}
                        />
                }
            </>
        )


    }
}

const mapStateToProps = (state: reduxStoreType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isAuth: state.auth.isAuth,
    }
}

// const mapDispatchToProps = (dispatch: (action: actionType) => void) => {
//     return {
//         followUser: (userId: number) => dispatch(followAC(userId)),
//         unfollowUser: (userId: number) => dispatch(unfollowAC(userId)),
//         setUsers: (users: Array<userItemType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         changeCurrentPage: (pageNumber: number) => {
//             dispatch(changeCurrentPageAC(pageNumber))
//         },
//         setIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetchingAC(isFetching))
//         },
//     }
// }

const propsFunctions = {
    toggleFollow,
    setUsers,
    changeCurrentPage,
    setIsFetching,
    setTotalUsersCount,
}


export default connect(mapStateToProps, propsFunctions)(UsersContainer)