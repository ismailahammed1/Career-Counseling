/* eslint-disable react/prop-types */
import {  useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../Contex/AuthProvider"
import Loading from "../Pages/AuthForm/Loading"

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location =useLocation();
   
    
    if (loading) {
      return <Loading></Loading>
    }
    if (user&& user?.email) {
      return children
    }
  return (
    <Navigate state={location.pathname} to={"/login"}></Navigate>

  )
}


export default PrivateRoute