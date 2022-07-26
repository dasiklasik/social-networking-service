import React from "react";
import {Field, InjectedFormProps} from "redux-form";

export type formDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<formDataType>> = (props) => {

    const {
        handleSubmit,
    } = props
    debugger

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'login'} type={'text'} component={'input'} placeholder={'login'}/>
                {/*<input placeholder={'login'}/>*/}
            </div>
            <div>
                <Field name={'password'} type={'text'} component={'input'} placeholder={'password'}/>
                {/*<input placeholder={'password'}/>*/}
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} component={'input'}/>
                {/*<input type={'checkbox'}/>*/} remember me
            </div>
            <div>
                <button type={'submit'}>login</button>
            </div>
        </form>
    )
}