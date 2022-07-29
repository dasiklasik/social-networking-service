import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {SuperInput} from "../common/formsControls/FormsControls";
import {required} from "../../utils/validators";

export type formDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<formDataType>> = (props) => {

    const {
        handleSubmit,
    } = props



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'login'} type={'text'} component={SuperInput} placeholder={'login'}
                validate={[required]}/>
            </div>
            <div>
                <Field name={'password'} type={'text'} component={SuperInput} placeholder={'password'}
                validate={[required]}/>
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} component={'input'}/>remember me
            </div>
            <div>
                <button type={'submit'}>login</button>
            </div>
        </form>
    )
}