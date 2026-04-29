import React from 'react'
import Login from '../Components/Login&Landing/Login'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectRoute = () => {
      let storingToken = localStorage.getItem("BearerToken")
      return storingToken ? <Outlet /> : <Navigate to="/login" replace />
}

export default ProtectRoute