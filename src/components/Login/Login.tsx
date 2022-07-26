import React from "react";
import {formDataType, LoginForm} from "./LoginForm";
import {reduxForm} from "redux-form";


export const Login = () => {

    const submit = (formData: formDataType) => {
        console.log('login:' + formData.login)
    }

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

