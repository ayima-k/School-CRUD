import React from 'react'
import { useNavigate } from 'react-router-dom'
import NoData from '../../assets/no-data.webp'
import cls from './Empty.module.scss'

const Empty = () => {
  const navigate = useNavigate()

  return (
    <div className={cls.empty}>
      <img src={NoData} alt="" />
      <h2>Класс пустой</h2>
      <button onClick={() => navigate('/admin')}>Создать ученика</button>
    </div>
  )
}

export default Empty