import React from 'react'
import NoPhoto from '../../assets/nophoto.jpg'
import cls from './Card.module.scss'

const Card = ({firstName, lastName, age, group, class_, url}) => {
  return (
    <div className={cls.card}>
      <div>
        <img src={url.length > 10 ? url : NoPhoto} alt="" />
        <h2>{firstName} {lastName}</h2>
        <p><span>{age}</span> years old</p>
        <div className={cls.block}>
          <p>Group: <span>{group}</span></p>
          <p className={cls.p2}>Class: <span>{class_}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Card