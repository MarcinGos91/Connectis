import React, { useEffect, useState } from 'react'
import { useUserContext, useOrdersContext, useGlobalContext} from '../contexts'
import { useCalculatePoints } from '../hooks'
import { PointsResult, OrderCard } from '../components'
import RingLoader from "react-spinners/RingLoader";

const Landing = () => {

    const [loading, setLoading] = useState(false)
    const {user} = useUserContext()
    const {orders, getOrders} = useOrdersContext()
    const {handleGlobalError} = useGlobalContext()
    const { calculatePoints } = useCalculatePoints()    
    const [myPoints, setMyPoints] = useState({month0: 0, month1: 0, month2: 0})
    const [ordersToShow, setOrdersToShow] = useState(orders)

    useEffect(() => {
        const updateState = async() => {
            setLoading(true)
            try {
                await getOrders()
                const tempOrders = orders.filter(order => order?.attributes?.userID === user?.id) 
                setOrdersToShow(tempOrders)
                setMyPoints(calculatePoints(tempOrders))
            } catch(error) {
                handleGlobalError(true)
            } finally {
                setLoading(false)
            }
        }
        !loading && updateState()
    },[JSON.stringify(orders)])

    if (loading) return (
        <div className='myPoints--spinner'>
            <RingLoader color='#ffffff' loading={loading} size={100} />
            <div className='myPoints--spinnerText'>Loading...</div>
        </div>
    )
    
    return (
        <div className='myPoints'>
            <div className='myPoints--points'>
                {user.id && 
                <div>My points:
                    <PointsResult points={myPoints.total} heading={'Total points'} />
                    <PointsResult points={myPoints.month0} heading={'This month'} />
                    <PointsResult points={myPoints.month1} heading={'Last month'} />
                    <PointsResult points={myPoints.month2} heading={'Two months ago'} />
                </div>}
            </div>
            <div className='myPoints--orders'>
                {user.id && 
                <div>My orders:
                    {ordersToShow.map(order => 
                        <div className=''>
                            <OrderCard key={order.id} price={order.attributes.price} date={order.attributes.date}/>
                        </div>)}
                </div>}
            </div>
        </div>
    )
}

export default Landing;