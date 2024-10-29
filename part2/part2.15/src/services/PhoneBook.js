import axios from 'axios'
const baseUrl = 'http://localhost:3001/phonebook'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request
        .then(response => {
            console.log('fetch all data from phonebook...', response.data)
            return response.data
        })
        .catch(err => {
            console.log('cannot fetch from server, error message: ', err)
        })
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request
        .then(response => {
            console.log('creating post...', response.data)
            return response.data
        })
        .catch(err => {
            console.log('cannot create from server, error message: ', err)
        })
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request
        .then(response => {
            console.log('updating post...')
            return response.data
        })
        .catch(err => {
            console.log('cannot update from server, error message: ', err)
        })
}

export default { getAll, create, update }