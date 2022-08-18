import React from "react";
import {connect} from "react-redux";
import {
    changeCurrentPage, followUser, fetchUsers,
    unfollowUser,
    userItemType
} from "../../redux/reducers/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {reduxStoreType} from "../../redux/redux-store";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers,
} from "../../redux/selectors/userSelectors";
import {getIsAuth} from "../../redux/selectors/authSelector";

type usersPropsType = {
    users: Array<userItemType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    changeCurrentPage: (pageNumber: number) => void
    isAuth: boolean
    followingInProgress: Array<number>
    fetchUsers: (pageNumber: number, pageSize: number) => void
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}

class UsersContainer extends React.Component<usersPropsType> {

    componentDidMount() {
        this.props.fetchUsers(this.props.currentPage, this.props.pageSize)
    }

    constructor(props: usersPropsType) {
        super(props);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.fetchUsers(pageNumber, this.props.pageSize)
        this.props.changeCurrentPage(pageNumber)
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isAuth: getIsAuth(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

const propsFunctions = {
    changeCurrentPage,
    fetchUsers,
    followUser,
    unfollowUser,
}


export default connect(mapStateToProps, propsFunctions)(UsersContainer)