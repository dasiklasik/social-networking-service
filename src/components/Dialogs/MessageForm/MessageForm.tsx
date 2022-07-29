import React, {ChangeEvent, useMemo} from "react";
import s from './MessageForm.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {SuperTextarea} from "../../common/formsControls/FormsControls";
import {maxLength, required} from "../../../utils/validators";


export type messageFormType = {
    dialogMessage: string
}


const MessageForm: React.FC<InjectedFormProps<messageFormType>> = (props) => {

    const {
        handleSubmit
    } = props


    const maxLength50 = useMemo(() => maxLength(50), [])

    return (
        <div className={s.message_form}>
            <form>
                <div>
                    <Field name={'dialogMessage'}
                           component={SuperTextarea}
                           validate={[required, maxLength50]}
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