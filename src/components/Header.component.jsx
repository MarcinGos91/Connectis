import React from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../contexts'
import { useLogin } from '../hooks'

const Header = () => {

    const {user} = useUserContext()
    const {handleLogout} = useLogin()
    return (
        <div className='header'>
            <div className='header--links'>
                <Link to='/'>Home</Link>
                {!user.id && <Link to='/register'>Register</Link>}
                {!user.id && <Link to='/login'>Login</Link>}
                {user.id && <Link to='/neworder'>Place new order</Link>}
                {user.id && <Link to='/mypoints'>My points</Link>}
            </div>
            <div className='header--userSection'>
                {user?.id && 
                    <>
                        <div>Witaj {user.username}</div>
                        <button className='button' onClick={()=>handleLogout()}>Logout</button>
                    </>
                }
            </div>
        </div>
    )
}

export default Header;