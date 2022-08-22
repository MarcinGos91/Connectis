import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NewOrder, Landing, Register, Login, RegisterSuccessful, MyPoints, Error } from './'
import { useGlobalContext } from '../contexts'

const Main = () => {

    const {globalError} = useGlobalContext()

    if (globalError) return <Error />

    return (
        <div className='main'>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/register' element={<Register/>} />
                <Route path='/registersuccess' element={<RegisterSuccessful/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/neworder' element={<NewOrder/>} />
                <Route path='/mypoints' element={<MyPoints/>} />
            </Routes>
        </div>
    )
}

export default Main;