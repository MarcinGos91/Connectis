import React from 'react'
import { useUserContext } from '../contexts'
import { Link } from 'react-router-dom'

const Landing = () => {

    const {user} = useUserContext()
 
    return (
        <div className='landing'>
            {!user.id && 
            <><div>Welcome. Please <Link to='/login'>LOGIN</Link> to your account.</div>
            <div>If you don't have one, you can register <Link to='/register'>HERE</Link>.</div>
            </>}
            {user.id && 
            <><div>Welcome back {user.username}.</div>
            <div>If you would like to place new order, please go <Link to='/neworder'>HERE</Link>.</div>
            <div>You can also check your points <Link to='/mypoints'>HERE</Link>.</div>
            </>}
        </div>
    )
}

export default Landing;