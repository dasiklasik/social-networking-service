import React, {DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes} from "react";
import {WrappedFieldProps} from "redux-form/lib/Field";
import styles from './FormsControls.module.css'

type DefaultTextareaPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperTextareaPropsType = DefaultTextareaPropsType & WrappedFieldProps
type SuperInputPropsType = DefaultInputPropsType & WrappedFieldProps

type FormControlPropsType = WrappedFieldProps & {
    hasError: boolean
}

const FormControl: React.FC<FormControlPropsType> = (props) => {
    return (
        <div>
            {props.children}
            {props.hasError ? <div className={styles.errorMessage}>{props.meta.error}</div> : null}
        </div>
    )
}

export const SuperTextarea = ({input, meta, ...props}: SuperTextareaPropsType) => {

    const hasError = meta.submitFailed
    const errorClassName = meta.submitFailed ? styles.error : ''

    return <FormControl input={input} meta={meta} hasError={hasError}>
        <textarea className={errorClassName} {...props} {...input}></textarea>
    </FormControl>
}


export const SuperInput = ({input, meta, ...props}: SuperInputPropsType) => {

    const hasError = meta.touched && meta.error
    const errorClassName = hasError ? styles.error : ''

    return <FormControl input={input} meta={meta} hasError={hasError}>
        <input className={errorClassName} {...props} {...input}/>
    </FormControl>
}