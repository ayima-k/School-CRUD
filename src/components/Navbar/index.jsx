import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.jpg'
import cls from './Navbar.module.scss'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className={cls.navbar}>
      <h1 onClick={() => navigate('/')}><img src={Logo}/>CRYXXEN</h1>
      <button onClick={() => navigate('/admin')}>Админ</button>
    </div>
  )
}

export default Navbar