import React from "react";
import {PostsWrapper} from "./PostsWrapper";
import {stateType} from "../../../redux/state";
import {Post} from "./Post/Post";
import {addPost} from "../../../redux/reducers/profileReducer";
import {connect} from "react-redux";


const mapStateToProps = (state: stateType) => {
    return {
        posts: state.profilePage.postData,
    }
}

export const PostsWrapperContainer = connect(mapStateToProps, {addPost})(PostsWrapper)