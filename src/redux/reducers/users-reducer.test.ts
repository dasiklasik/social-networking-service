import {usersInfo} from "../state";
import {
    changeCurrentPage,
    setFollowingInProgress,
    setIsFetching,
    setTotalUsersCount,
    toggleFollow,
    usersReducer
} from "./users-reducer";

let initialState: usersInfo

beforeEach(() => {
    return initialState = {
        users: [
            {
                name: 'Lay',
                id: 1,
                uniqueUrlName: null,
                photos: {small: null, large: null},
                status: null,
                followed: false,
            },
            {
                name: 'May',
                id: 2,
                uniqueUrlName: null,
                photos: {small: null, large: null},
                status: null,
                followed: true,
            }
        ],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
    }
})

test('user reducer should follow user', () => {
    const endState = usersReducer(initialState, toggleFollow(1, true))

    expect(endState.users[0].followed).toBe(true)
})

test('user reducer should unfollow user', () => {
    const endState = usersReducer(initialState, toggleFollow(2, false))

    expect(endState.users[0].followed).toBe(false)
})

test('user reducer should set total users count', () => {
    const endState = usersReducer(initialState, setTotalUsersCount(15))

    expect(endState.totalUsersCount).toBe(15)
})

test('user reducer should change current page number', () => {
    const endState = usersReducer(initialState, changeCurrentPage(4))

    expect(endState.currentPage).toBe(4)
})

test('user reducer should set isFetching to true', () => {
    const endState = usersReducer(initialState, setIsFetching(true))

    expect(endState.isFetching).toBe(true)
})