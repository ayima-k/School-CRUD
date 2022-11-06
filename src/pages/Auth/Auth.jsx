import React from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../../assets/icon.png'
import { handleLoginWithGoogle } from '../../firebase'
import { AuthContext } from '../../providers/AuthProvider'
import cls from './Auth.module.scss'

const Auth = () => {
  const { users } = React.useContext(AuthContext)
  const navigate = useNavigate()

  users && navigate('/')

  React.useEffect(() => {
    users && navigate('/')
  }, [navigate, users])

  return (
    <div className={cls.main}>
      <div className={cls.auth}>
        <h1>Authorization</h1>
        <button onClick={handleLoginWithGoogle}>Get started with <img src={Icon}/>oogle</button>
      </div>
    </div>
  )
}

export default Auth