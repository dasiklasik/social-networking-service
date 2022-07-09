import React from "react";
import {connect} from "react-redux";
import {
    changeCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleFollow,
    userItemType
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";
import {reduxStoreType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";

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
        this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                console.log(response)
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount)
                this.props.setIsFetching(false)
            }
        )
    }

    constructor(props: usersPropsType) {
        super(props);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.setUsers(response.items)
                this.props.setIsFetching(false)
            })
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