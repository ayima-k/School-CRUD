import React from 'react'
import { deleteStudent, editStudent, getStudents } from '../../api'
import Card from '../Card'
import useCard from '../hooks/useCard'
import Empty from '../Empty'
import { AiFillEdit } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
import cls from './StudentsAdmin.module.scss'

const StudentsAdmin = () => {
  const { students } = useCard()

  React.useEffect(() => {
    getStudents()
  }, [students, getStudents])

  const handleDelete = (id) => {
    deleteStudent(id)
    .then(getStudents)
  }

  const handleEdit = (id) => {
    editStudent(id, {firstName: window.prompt('New First Name'), lastName: window.prompt('New Last Name'),age: +window.prompt('New Age'), group: +window.prompt('New Class'), class: window.prompt('New Group: A B C D'), url: window.prompt('New image url')})
    .then(getStudents)
  }

  if (students?.length === 0) return (<div className={cls.emptyBlock}><Empty/></div>)

  return (
    <div className={cls.root}>
      {
        students && students.map(({id, firstName, lastName, age, group, class_, url}) => (
          <div className={cls.card} key={id}>
            <Card firstName={firstName} url={url} lastName={lastName} age={age} group={group} class_={class_}/>
            <div className={cls.btns}>
              <button className={cls.edit} onClick={() => handleEdit(id)}>Edit <AiFillEdit/></button>
              <button className={cls.delete} onClick={() => handleDelete(id)}>Delete <AiFillDelete/></button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default StudentsAdmin