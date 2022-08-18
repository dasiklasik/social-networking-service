import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {CreateFormField, SuperInput} from "../common/formsControls/FormsControls";
import {required} from "../../utils/validators";
import styles from './LoginForm.module.css'

export type formDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<formDataType>> = (props) => {

    const {
        handleSubmit,
        error,
    } = props

    return (
        <form onSubmit={handleSubmit}>
            {CreateFormField({name: 'email', type: 'text', component: SuperInput, placeholder: 'email', validate: [required]})}
            {CreateFormField({name: 'password', placeholder: 'password', type: 'text', component: SuperInput, validate: [required]})}
            {CreateFormField({name: 'rememberMe', type: 'checkbox', component: 'input'})}
            {error ? <div className={styles.formError}>
                {error}
            </div> : null}
            <div>
                <button type={'submit'}>login</button>
            </div>
        </form>
    )
}