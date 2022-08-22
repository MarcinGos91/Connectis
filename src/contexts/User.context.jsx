import React, { createContext, useState, useCallback, useContext } from "react";


export const UserContext = createContext({})

const UserContextProvider  = ({children}) => {
    const initialValues  = {}
    const [user, setUser] = useState(initialValues)
    const handleLogin = useCallback((user) => setUser(user),[])

    const handleLogout = () => {
        setUser(initialValues)
    }
    return(
        <UserContext.Provider value={{user, handleLogin, handleLogout}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;

export const useUserContext = () => useContext(UserContext)