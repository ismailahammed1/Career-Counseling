/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const AuthContext=createContext()

 
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({ email: "ismail@gmil.com", name: "1234" });


    const authInfo={
        user,
        setUser,
    }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider