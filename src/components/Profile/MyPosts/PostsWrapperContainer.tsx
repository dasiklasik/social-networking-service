import React from "react";
import {PostsWrapper} from "./PostsWrapper";
import { stateType} from "../../../redux/state";
import {Post} from "./Post/Post";
import {addPost, changeTypedMessage} from "../../../redux/profileReducer";
import {connect} from "react-redux";


const mapStateToProps = (state: stateType) => {
    return {
        posts: state.profilePage.postData
            .map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>),
        newPostText: state.profilePage.newPostText
    }
}

const propsFunctions = {
    changeTypedMessage,
    addPost,
}

export const PostsWrapperContainer = connect(mapStateToProps, propsFunctions)(PostsWrapper)