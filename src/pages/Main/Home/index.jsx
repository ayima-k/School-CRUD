import React from 'react'
import Navbar from '../../../components/Navbar'
import Empty from '../../../components/Empty'
import useCard from '../../../components/hooks/useCard'
import Card from '../../../components/Card'
import cls from './Home.module.scss'
import Loader from '../../../components/Loader'

const Home = () => {
  const { students } = useCard()

  return(
    <>
      <Navbar/>
      {
        !students && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}><Loader/></div>
      }
      {
        students?.length === 0 && <Empty/>
      }
      <div className={cls.root}>
        {
          students && students.map(({id, firstName, lastName, age, group, class_, url}) => (
            <Card key={id} firstName={firstName} url={url} lastName={lastName} age={age} group={group} class_={class_}/>
          ))
        }
      </div>
    </>
  )
}

export default Home