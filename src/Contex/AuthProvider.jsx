import { createContext, useState } from "react"

export const AuthContext=createContext()

 
const AuthProvider = () => {
    const [user, setUser] = useState({ email: "ismail@gmil.com", password: "1234" });


    const authInfo={
        user,
        setUser,
    }
  return (
    <AuthContext.Provider value={authInfo}>AuthProvider</AuthContext.Provider>
  )
}

export default AuthProvider