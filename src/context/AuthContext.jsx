import React, { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router"

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(false)
  const navigate = useNavigate()
  //const [sudoId, setSudoId] = useState(localStorage.getItem('sudoId') || {})

//  const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || '')
    //const sudoId = UserId() 
    const [isPending, setIsPending] = useState()

    const login = () => {
        setUser(true)
        navigate('/homepage')
    }

    

  
    return (
        <UserContext.Provider value={{ user, login }}>{children}
               
        </UserContext.Provider>
      );

}
export const UserAuth = () => {
    return useContext(UserContext);
  };
  