import React, {ChangeEvent} from "react";
import s from './MessageForm.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type messageFormType = {
    dialogMessage: string
}


type messageFormPropsType = {
    changeMessage: (text: string) => void
    newDialogMessageText: string
}

const MessageForm: React.FC<InjectedFormProps<messageFormType, messageFormPropsType> & messageFormPropsType> = (props) => {

    const {
        changeMessage,
        newDialogMessageText,
        handleSubmit
    } = props

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeMessage(e.currentTarget.value)
    }

    return (
        <div className={s.message_form}>
            <form>
                <div>
                    <Field name={'dialogMessage'} value={newDialogMessageText} onChange={onChangeMessage}
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

export default reduxForm<messageFormType, messageFormPropsType>({
    form: 'message'
})(MessageForm)