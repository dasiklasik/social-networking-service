import React from "react";
import {formDataType, LoginForm} from "./LoginForm";
import {reduxForm} from "redux-form";
import { Navigate } from "react-router-dom";

type LoginPropsType = {
    login: (formData: formDataType) => void
    isAuth: boolean
}

export const Login = (props: LoginPropsType) => {

    const {
        login,
        isAuth,
    } = props

    const submit = (formData: formDataType) => {
        login(formData)
    }

    if (isAuth) return <Navigate to={'/profile'}/>

    return (
        <div>
            <h1>Login</h1>
            <LoginFormContainer onSubmit={submit}/>
        </div>
    )
}

const  LoginFormContainer = reduxForm<formDataType >({
    form: 'login'
})(LoginForm)



