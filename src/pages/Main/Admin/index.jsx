import React from 'react'
import CreateCard from '../../../components/CreateCard'
import Navbar from '../../../components/Navbar'
import StudentsAdmin from '../../../components/StudentsAdmin'
import cls from './Admin.module.scss'

const Admin = () => {
  const [toggleCreate, setToggleCreate] = React.useState(false)
  const [toggle, setToggle] = React.useState(false)
  
  return (
    <>
      <Navbar/>
      <div className={cls.admin}>
        <div className={cls.btns}>
          <button onClick={() => {
            setToggleCreate(prev => !prev)
            setToggle(false)
          }}>Добавить ученика</button>
          <button onClick={() => {
            setToggle(prev => !prev)
            setToggleCreate(false)
          }}>Все ученики</button>
        </div>
        <div className={cls.root}>
          {
            !toggleCreate && !toggle ? <h2 className={cls.text}>Select an action</h2> : ''
          }
          {
            toggleCreate && <CreateCard/>
          }
          {
            toggle && <StudentsAdmin/>
          }
        </div>
      </div>
    </>
  )
}

export default Admin