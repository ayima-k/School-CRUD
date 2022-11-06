import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
import Loader from '../Loader'

const PrivateRoutes = () => {
  const { users, loading } = React.useContext(AuthContext)

  if (loading) return (<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}><Loader/></div>)

  return users ? <Outlet/> : <Navigate to={'/auth'}/>
}

export default PrivateRoutes