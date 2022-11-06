import React from 'react'
import { getStudents } from '../../api'

const useCard = () => {
  const [students, setStudents] = React.useState(null)

  React.useEffect(() => {
    getStudents()
    .then(r => {
      const data = r ? Object.entries(r).map(([id, rest]) => {
        return {
          id,
          ...rest
        }
      }) : []
      setStudents(data)
    })
  }, [])

  return {
    students
  }
}

export default useCard