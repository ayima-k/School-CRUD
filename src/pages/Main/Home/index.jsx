import React from 'react'
import Navbar from '../../../components/Navbar'
import { getStudents } from '../../../api'
import Empty from '../../../components/Empty'

const Home = () => {
  const [students, setStudents] = React.useState(null)

  React.useEffect(() => {
    getStudents()
    .then(r => {
      console.log(r);
      
    })
  }, [])

  return(
    <>
      <Navbar/>
      {
        !students ? <Empty/>
        : (
          <div></div>
        )
      }
    </>
  )
}

export default Home