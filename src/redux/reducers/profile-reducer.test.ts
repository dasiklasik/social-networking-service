import {profilePageType} from "../state";
import {addPost, changeStatus, deletePost, profileReducer} from "./profile-reducer";

let initialState: profilePageType;

beforeEach(() => {
    return  initialState =  {
        postData: [
            {id: 1, message: 'Message', likesCount: '0'},
            {id: 2, message: 'Message 2', likesCount: '2'},
        ],
        profileInfo: {
            aboutMe: '',
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: '',
            },
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            userId: '',
            photos: {
                small: '',
                large: '',
            },
        },
        newPostText: '',
        status: 'hi',
    }
})


test('profile reducer should add a post', () => {
    const endState = profileReducer(initialState, addPost('new post'))

    expect(endState.postData[0].id).toBe(3)
    expect(endState.postData[0].message).toBe('new post')
})

test('profile reducer should delete a post', () => {
    const endState = profileReducer(initialState, deletePost(1))

    expect(endState.postData.length).toBe(1)
    expect(endState.postData[0].id).toBe(2)
})

test('profile reducer should change status', () => {
    const endState = profileReducer(initialState, changeStatus('new status'))

    expect(endState.status).toBe('new status')
})