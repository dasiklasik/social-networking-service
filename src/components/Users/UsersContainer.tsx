import React from "react";
import {connect} from "react-redux";
import {
    changeCurrentPage, followUser, getUsers, setFollowingInProgress,
    toggleFollow, unfollowUser,
    userItemType
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";
import {reduxStoreType} from "../../redux/redux-store";

type usersPropsType = {
    users: Array<userItemType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    changeCurrentPage: (pageNumber: number) => void
    isAuth: boolean
    followingInProgress: Array<number>
    getUsers: (pageNumber: number, pageSize: number) => void
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}

class UsersContainer extends React.Component<usersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    constructor(props: usersPropsType) {
        super(props);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render = () => {

        return (
            <>
                {
                    this.props.isFetching ?
                        <Preloader/> :
                        <Users
                            currentPage={this.props.currentPage}
                            onPageChanged={this.onPageChanged}
                            users={this.props.users}
                            pageSize={this.props.pageSize}
                            totalUsersCount={this.props.totalUsersCount}
                            isAuth={this.props.isAuth}
                            followingInProgress={this.props.followingInProgress}
                            followUser={this.props.followUser}
                            unfollowUser={this.props.unfollowUser}
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
        followingInProgress: state.usersPage.followingInProgress,
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
    changeCurrentPage,
    getUsers,
    followUser,
    unfollowUser,
}


export default connect(mapStateToProps, propsFunctions)(UsersContainer)