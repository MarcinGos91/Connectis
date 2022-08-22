import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Input } from '../formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useUrls } from '../hooks'
import { useUserContext } from '../contexts'

const Register = () => {
    const {REGISTER_URL} = useUrls()
    const navigate = useNavigate()
    const {handleLogin} = useUserContext()
    const initialValues = {username:'', email:'', password:'', confirmPassword:''}

    const createUser = ({username, email, password}) => {
        axios.post(REGISTER_URL, {
            username, email, password
            })
            .then((response) => {
                const {jwt, user} = response.data
                handleLogin({jwt, ...user, logged:true})
                navigate('/registersuccess')
                setTimeout(()=>{navigate('/')}, 2000) 
            })
            .catch(error => {
                setErrorMessage('Username or email is already taken')
            }); 
    }

    const [errorMessage, setErrorMessage] = useState('')
    const validationSchema = Yup.object({
        username: Yup.string().required('FIELD REQUIRED!'),
        email: Yup.string().required('FIELD REQUIRED!'),
        password: Yup.string().required('FIELD REQUIRED!'),
        confirmPassword: Yup.string().required('FIELD REQUIRED!').oneOf([Yup.ref('password'), null], 'PASSWORDS MUST MATCH')})
    
    return (
        <div className='register'>
            <div>REGISTER YOUR ACCOUNT</div>
            <div className='register--error'>{errorMessage}</div>
            <Formik initialValues={initialValues} onSubmit={createUser} validationSchema={validationSchema}>
                <Form className='register--form'>
                    <Input name="username" text="enter your username" type="text"/>
                    <Input name="email" text="enter your email" type="text"/>
                    <Input name="password" text="enter your password" type="password"/>
                    <Input name="confirmPassword" text="confirm your password" type="password"/>
                    <div className='register--button'><button type='submit' className='button'>SUBMIT</button></div>
                </Form>
            </Formik>
        </div>
    )
}

export default Register;