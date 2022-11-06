import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'

const PrivateRoutes = ({children}) => {
  const { users } = React.useContext(AuthContext)

  return users ? <Outlet/> : <Navigate to={'/auth'}/>
}

export default PrivateRoutes