import React, {ChangeEvent} from "react";
import s from './MessageForm.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type messageFormType = {
    dialogMessage: string
}


const MessageForm: React.FC<InjectedFormProps<messageFormType>> = (props) => {

    const {
        handleSubmit
    } = props

    return (
        <div className={s.message_form}>
            <form>
                <div>
                    <Field name={'dialogMessage'}
                           component={'textarea'}
                    ></Field>
                </div>
                <div>
                    <button type={'submit'} onClick={handleSubmit}>send</button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm<messageFormType>({
    form: 'message'
})(MessageForm)