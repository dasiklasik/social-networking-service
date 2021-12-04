import React from "react";
import {PostsWrapper} from "./PostsWrapper";
import {actionType, profilePageType} from "../../../redux/state";
import {Post} from "./Post/Post";
import {addPostActionCreator, changeTypedMessageActionCreator} from "../../../redux/profileReducer";

type PostsWrapperContainerPropsType = {
    profilePage: profilePageType
    dispatch: (action: actionType) => void
}

export const PostsWrapperContainer = (props: PostsWrapperContainerPropsType) => {

    const postArray = props.profilePage.postData
        .map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const changeTypedMessage = (text: string) => {
        props.dispatch(changeTypedMessageActionCreator(text))
    }

    return <PostsWrapper
        posts={postArray}
        addPost={addPost}
        newPostText={props.profilePage.newPostText}
        changeTypedMessage={changeTypedMessage}/>
}