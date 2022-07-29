import React, {useCallback, useMemo} from "react";
import s from './../PostsWrapper.module.css'
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import {maxLength, required} from "../../../../utils/validators";
import {SuperTextarea} from "../../../common/formsControls/FormsControls";


export type postFormType = {
    postText: string
}

const PostForm: React.FC<InjectedFormProps<postFormType>> = (props) => {

    const {
        handleSubmit
    } = props

    const maxLength100 = useMemo(() => maxLength(100), [])


    return (
        <div className={s.post_form}>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name={'postText'} component={SuperTextarea}
                           validate={[required, maxLength100]}/>
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

