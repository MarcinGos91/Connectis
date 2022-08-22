import React, { createContext, useState, useContext } from "react";
import OrdersContextProvider from "./Orders.context";
import UserContextProvider from "./User.context";

export const GlobalContext = createContext({})


const GlobalContextProvider  = ({children}) => {

    const [globalError, setGlobalError] = useState(false)
    const handleGlobalError = (newError) => setGlobalError(newError)

    return(
        <GlobalContext.Provider value={{globalError, handleGlobalError}}>
            <UserContextProvider>
                <OrdersContextProvider>
                    {children}
                </OrdersContextProvider>
            </UserContextProvider>
        </GlobalContext.Provider>
    )

}

export default GlobalContextProvider;

export const useGlobalContext = () => useContext(GlobalContext)