import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const allPersons =  axios.get(baseUrl)
    return allPersons.then(response => response.data)
}

const create = newObject => {
    const newPerson = axios.post(baseUrl, newObject)
    return newPerson.then(response => response.data)
}

const update = (id, newObject) => {
    const updatedPerson = axios.put(`${baseUrl}/${id}`, newObject)
    return updatedPerson.then(response => response.data)
}

const remove = id => {
    const deletedPerson = axios.delete(`${baseUrl}/${id}`)
    return deletedPerson.then(response => response.data)
}

export default {
    getAll, create, update, remove
}