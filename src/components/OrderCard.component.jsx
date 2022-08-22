import React from 'react'

const OrderCard = ({price, date}) => {

    return (
        <div className='orderCard'>
            <div>Value: {price}$</div>
            <div>Date: {date}</div>
        </div>
    )
}

export default OrderCard;