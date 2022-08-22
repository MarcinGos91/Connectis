import React, { useState } from 'react'
import { useUrls } from '../hooks'
import { useUserContext } from '../contexts'
import axios from 'axios'

const NewOrder = () => {

    const {NEW_ORDER_URL} = useUrls()
    const {user} = useUserContext()
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const [price, setPrice] = useState(0)

    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }
    
    const [date, setDate] = useState()
    const handleDateChange = (event) => {
        setDate(event.target.value)
    }

    const validateOrder = newOrder => {
        const {date, price} = newOrder
        if (!date || price < 1) {
            setError('Please fill in the necessary data')
            setSuccess('')
            return false
        }
        return true
    }

    const handleNewOrder = (newOrder) => {
        if (!validateOrder(newOrder)) return
        axios
        .post(NEW_ORDER_URL, {"data": {  ...newOrder }}, { headers: { Authorization: `Bearer ${user.jwt}`, },})
        .then((resp) => {
            setError('')
            setSuccess("New order has been created")
        })
        .catch((error) => {
            setSuccess('')
            setError("Something went wrong, please try again. Make sure the backend is running")
        })}

    return (
        <div className='newOrder'>
            {user.id && <div className='newOrder--form'>
                <div>CREATE ORDER</div>
                <label htmlFor='price'>Price:</label>
                <input className='newOrder--input' onChange={handlePriceChange} name='price' type='number' id='price'></input>
                <label htmlFor='date'>Date:</label>
                <input className='newOrder--input' onChange={handleDateChange} name='date' type='date' id='date'></input>
                <button className='button' onClick={() => handleNewOrder({ userID: user.id, price,  date})}>Place order</button>
            </div> } 
            <div className='newOrder--message'>
            {success}
            {error}
            {!user.id && <div>You need to be logged in</div>}
            </div>
        </div>
    )
}

export default NewOrder;