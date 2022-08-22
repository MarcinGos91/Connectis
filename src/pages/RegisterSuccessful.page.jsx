import React from 'react'
import { Link } from 'react-router-dom'

const RegisterSuccess = () => {

    return (
        <div className='registerSuccessful'>
            <div className=''>
                    You've successfuly registered your account. You will be redirected soon.
                <div className="">
                    In  case this does not happen, please press <Link className='' to='/'>here </Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterSuccess;