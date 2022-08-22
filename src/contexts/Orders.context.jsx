import React, { createContext, useState, useContext } from "react";
import axios from 'axios'
import { useUrls } from '../hooks'

export const OrdersContext = createContext({})

const OrdersContextProvider = ({children}) => {
    const {ORDERS_URL} = useUrls()
    const [orders, setOrders] = useState([])

    const getOrders = () => axios.get(ORDERS_URL).then(resp => setOrders(resp.data.data))
    


    return (
        <OrdersContext.Provider value={{orders, getOrders}}>
            {children}
        </OrdersContext.Provider>
    )
}

export default OrdersContextProvider;

export const useOrdersContext = () => useContext(OrdersContext)