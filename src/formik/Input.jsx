import React from 'react'
import {Field, ErrorMessage} from "formik";

const Input = ({name, text, type}) => {

    return (
        <div className='formik--input'>
            <div className='formik--container'>
                <label htmlFor={name}>{text}</label>
                <Field className='formik--Inputfield' type={type} name={name} id={name} />
            </div>
            <div className='formik--inputErrorMessage'>
                <ErrorMessage name={name} />
            </div>
        </div>
    )
}

export default Input;