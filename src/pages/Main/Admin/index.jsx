import React from 'react'
import CreateCard from '../../../components/CreateCard'
import Navbar from '../../../components/Navbar'
import cls from './Admin.module.scss'

const Admin = () => {
  const [toggleCreate, setToggleCreate] = React.useState(false)

  console.log(toggleCreate);
  return (
    <>
      <Navbar/>
      <div className={cls.admin}>
        <div className={cls.btns}>
          <button onClick={() => setToggleCreate(prev => !prev)}>Добавить ученика</button>
          <button>Все ученики</button>
        </div>
        <div className={cls.root}>
          {
            toggleCreate && <CreateCard/>
          }
        </div>
      </div>
    </>
  )
}

export default Admin