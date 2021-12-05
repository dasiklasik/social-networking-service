import React from "react";
import {PostsWrapper} from "./PostsWrapper";
import {actionType, stateType} from "../../../redux/state";
import {Post} from "./Post/Post";
import {addPostActionCreator, changeTypedMessageActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";


const mapStateToProps = (state: stateType) => {
    return {
        posts: state.profilePage.postData
            .map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>),
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: (action: actionType) => void) => {
    return {
        changeTypedMessage: (text: string) => {
            dispatch(changeTypedMessageActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const PostsWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(PostsWrapper)