import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Input } from '../formik'
import { useLogin } from '../hooks'

const Login = () => {

    const initialValues = {identifier:'Test123', password:'Test123', stayLogged:false, checked:[]}
    const validationSchema = Yup.object({
        identifier: Yup.string().required('FIELD REQUIRED!'),
        password: Yup.string().required('FIELD REQUIRED!')})
        
    const {handleLogin} = useLogin(true)

    return (
        <div className='login'>
            <div className="">LOGIN TO YOUR ACCOUNT</div>
            <Formik initialValues={initialValues} onSubmit={handleLogin} validationSchema={validationSchema}>
                <Form className='login--form'>
                    <Input name='identifier' text='enter your username' type='text'/>
                    <Input name='password' text='enter your password' type='password'/>
                    <div className='login--rememberMe'>
                        <div><Field type='checkbox' name='toggle'/><span>remember me</span></div>
                        <button type='submit' className='button'>SUBMIT</button>
                    </div>
                </Form>
                
            </Formik>
            
        </div>
    )
}

export default Login;