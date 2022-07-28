import React, {ChangeEvent} from "react";
import s from './../PostsWrapper.module.css'
import {InjectedFormProps, reduxForm, Field} from "redux-form";


export type postFormType = {
    postText: string
}

export type postFormPropsType = {
    addPost: () => void
    newPostText: string
    changeTypedMessage: (text: string) => void
}

const PostForm: React.FC<InjectedFormProps<postFormType, postFormPropsType> & postFormPropsType> = (props) => {

    const {
        addPost,
        changeTypedMessage,
        newPostText,
        handleSubmit
    } = props

    const onClickHandler = () => {
        addPost()
    }

    const onTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeTypedMessage(e.currentTarget.value)
    }

    return (
        <div className={s.post_form}>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name={'postText'} value={newPostText} onChange={onTextChange} component={'textarea'}/>
                </div>
                <div>
                    <button type={'submit'} onClick={onClickHandler}>Send</button>
                </div>
            </form>
        </div>
    )
}

export const PostFormContainer = reduxForm<postFormType, postFormPropsType>({
    form: 'post'
})(PostForm)

