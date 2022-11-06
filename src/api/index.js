import { API } from "./api";

export const getStudents = () => API.get('/students')

export const createStudent = (data) => API.post('/students/', data)

export const editStudent = (data) => API.patch('/students/', data)

export const  deleteStudent = (id) => API.delete(`/students/${id}`)