import React, {ChangeEvent} from "react";
import s from './../PostsWrapper.module.css'
import {InjectedFormProps, reduxForm, Field} from "redux-form";


export type postFormType = {
    postText: string
}

const PostForm: React.FC<InjectedFormProps<postFormType>> = (props) => {

    const {
        handleSubmit
    } = props


    return (
        <div className={s.post_form}>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name={'postText'} component={'textarea'}/>
                </div>
                <div>
                    <button type={'submit'}>Send</button>
                </div>
            </form>
        </div>
    )
}

export const PostFormContainer = reduxForm<postFormType>({
    form: 'post'
})(PostForm)

